interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200" />
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative pl-20">
            {/* Timeline dot */}
            <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md" />
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-2">
                {event.year}
              </span>
              <h3 className="mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
