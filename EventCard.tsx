// src/components/EventCard.tsx
import React from "react";

interface EventCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export default function EventCard({ title, description, imageUrl, date }: EventCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border bg-white p-4 max-w-md">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-sm text-gray-500 mt-1">Event Date: {new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
