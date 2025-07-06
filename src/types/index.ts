// Event/Speaker types for future use
export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface EventSchedule {
  id: string;
  time: string;
  title: string;
  speaker?: Speaker;
  duration: number;
  description?: string;
}
