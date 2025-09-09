import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { LogOut, Mail, Calendar, DollarSign, MessageSquare, User } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  budget: string;
  type: 'hire' | 'client' | 'investor';
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, signOut, isAdmin, loading } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loadingContacts, setLoadingContacts] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchContacts();
    }
  }, [user, isAdmin]);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts((data || []) as Contact[]);
    } catch (error) {
      toast({
        title: "Error loading contacts",
        description: "Failed to fetch contact submissions.",
        variant: "destructive",
      });
    } finally {
      setLoadingContacts(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'client': return 'bg-blue-100 text-blue-800';
      case 'hire': return 'bg-green-100 text-green-800';
      case 'investor': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'client': return 'Client Project';
      case 'hire': return 'Employment';
      case 'investor': return 'Investment';
      default: return type;
    }
  };

  if (loading || (!user || !isAdmin)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage contact submissions and inquiries</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <div className="grid gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Contact Submissions ({contacts.length})
                </CardTitle>
                <CardDescription>
                  Recent inquiries from potential clients, employers, and investors
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loadingContacts ? (
                  <div className="text-center py-8">
                    <div className="animate-pulse">Loading contacts...</div>
                  </div>
                ) : contacts.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No contact submissions yet.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contacts.map((contact) => (
                      <Card key={contact.id} className="border-l-4 border-l-primary">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <User className="w-5 h-5 text-muted-foreground" />
                              <div>
                                <h3 className="font-semibold">{contact.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Mail className="w-4 h-4" />
                                  {contact.email}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={getTypeColor(contact.type)}>
                                {getTypeLabel(contact.type)}
                              </Badge>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                {new Date(contact.created_at).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          
                          {contact.budget && (
                            <div className="flex items-center gap-2 mb-3 text-sm">
                              <DollarSign className="w-4 h-4 text-green-600" />
                              <span className="font-medium">Budget:</span>
                              <span>${contact.budget}</span>
                            </div>
                          )}
                          
                          <div className="bg-muted/50 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Message:</h4>
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                              {contact.message}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;