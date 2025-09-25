import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useUserCount() {
  const [userCount, setUserCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Check if this is a new visit (not a page refresh)
        const sessionKey = `visit_${Date.now()}`;
        const hasVisited = sessionStorage.getItem('hasVisited');
        
        if (!hasVisited) {
          // Track this visit in Supabase
          const { error } = await supabase
            .from('website_visits')
            .insert({
              timestamp: new Date().toISOString(),
              user_agent: navigator.userAgent,
              referrer: document.referrer,
              page: window.location.pathname,
            });

          if (error) {
            console.error('Error tracking visit:', error);
          } else {
            sessionStorage.setItem('hasVisited', 'true');
          }
        }

        // Get current visit count
        const { data, error: countError } = await supabase
          .from('website_visits')
          .select('*', { count: 'exact' });

        if (countError) {
          console.error('Error getting visit count:', countError);
          // Fallback to localStorage
          const storedCount = localStorage.getItem('userCount');
          setUserCount(storedCount ? parseInt(storedCount) : 12450);
        } else {
          setUserCount(data?.length || 0);
        }
      } catch (error) {
        console.error('Error in useUserCount:', error);
        // Fallback to localStorage
        const storedCount = localStorage.getItem('userCount');
        setUserCount(storedCount ? parseInt(storedCount) : 12450);
      } finally {
        setIsLoading(false);
      }
    };

    trackVisit();
  }, []);

  return { userCount, isLoading };
}