import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ContactMessage } from "@shared/schema";

export default function AdminPage() {
  const { data: messages, isLoading, error } = useQuery<ContactMessage[]>({
    queryKey: ["/api/contact"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <i className="fas fa-spinner fa-spin text-3xl text-primary-blue mb-4"></i>
            <p>Loading messages...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <i className="fas fa-exclamation-triangle text-3xl text-red-500 mb-4"></i>
            <p>Error loading messages</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Contact Messages
          </h1>
          <p className="text-gray-600">
            Messages received through the portfolio contact form
          </p>
        </div>

        {!messages || (Array.isArray(messages) && messages.length === 0) ? (
          <Card>
            <CardContent className="p-8 text-center">
              <i className="fas fa-inbox text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No messages yet
              </h3>
              <p className="text-gray-600">
                Messages from the contact form will appear here
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {Array.isArray(messages) && messages.map((message: ContactMessage, index: number) => (
              <Card key={message.id} data-testid={`message-${index}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{message.name}</CardTitle>
                      <p className="text-sm text-gray-600">{message.email}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">
                        {new Date(message.createdAt).toLocaleDateString()}
                      </Badge>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(message.createdAt).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800 leading-relaxed">
                      {message.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a 
            href="/"
            className="inline-flex items-center text-primary-blue hover:text-primary-dark transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}