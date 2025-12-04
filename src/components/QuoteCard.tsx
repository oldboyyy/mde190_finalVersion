import { Quote } from 'lucide-react';

interface QuoteCardProps {
  quote: string;
  context?: string;
}

export function QuoteCard({ quote, context }: QuoteCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 shadow-sm">
      <Quote className="w-10 h-10 text-blue-400 mb-4" />
      <blockquote className="text-gray-800 italic mb-4">
        "{quote}"
      </blockquote>
      {context && (
        <p className="text-gray-600">— {context}</p>
      )}
    </div>
  );
}
