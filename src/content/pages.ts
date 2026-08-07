export type PageDefinition = {
  slug: string;
  title: string;
  description: string;
};

export const pageDefinitions: Record<string, PageDefinition> = {
  'board-and-train': { slug: 'board-and-train', title: 'Board & Train', description: 'Immersive residential dog training in Corona, CA.' },
  'aggressive-dog-training': { slug: 'aggressive-dog-training', title: 'Aggressive Dog Training', description: 'Behavior rehabilitation for aggressive dogs in Corona, CA.' },
  'reactive-dog-training': { slug: 'reactive-dog-training', title: 'Reactive Dog Training', description: 'Training for reactive and over-aroused dogs in Corona, CA.' },
  'puppy-training': { slug: 'puppy-training', title: 'Puppy Training', description: 'Puppy socialization and obedience foundations in Corona, CA.' },
  'private-dog-training': { slug: 'private-dog-training', title: 'Private Dog Training', description: 'One-on-one dog training sessions in Corona, CA.' },
  'dog-boarding': { slug: 'dog-boarding', title: 'Dog Boarding', description: 'Overnight dog boarding at our Corona, CA facility.' },
  'dog-daycare': { slug: 'dog-daycare', title: 'Dog Daycare', description: 'Kennel-free dog daycare in Corona, CA.' },
  'meet-the-team': { slug: 'meet-the-team', title: 'Meet the Team', description: 'Meet the trainers behind Team Floppy Ears.' },
  'facility': { slug: 'facility', title: 'Our Facility', description: 'Tour the Team Floppy Ears training and boarding facility in Corona, CA.' },
  'book-evaluation': { slug: 'book-evaluation', title: 'Book an Evaluation', description: 'Tell us about your dog and request a training evaluation.' },
};
