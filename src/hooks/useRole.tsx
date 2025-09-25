import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { Tables } from '@/integrations/supabase/types';

type Profile = Tables<'profiles'>;

interface RoleContextType {
  profile: Profile | null;
  loading: boolean;
  isConsultant: boolean;
  isAdmin: boolean;
  isApproved: boolean;
  canCreateConsultation: boolean;
}

export function useRole(): RoleContextType {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching profile:', error);
        }

        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const isConsultant = profile?.role === 'consultant' || profile?.role === 'admin';
  const isAdmin = profile?.role === 'admin';
  const isApproved = profile?.is_approved || false;
  const canCreateConsultation = isConsultant && isApproved;

  return {
    profile,
    loading,
    isConsultant,
    isAdmin,
    isApproved,
    canCreateConsultation,
  };
} 