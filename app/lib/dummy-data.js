let id = 8;

export const news = [
  {
    id: 1,
    title: "Local Cat Declares Living Room an Independent State",
    description:
      "After hours of staring contests and aggressive tail flicks, the family cat has officially claimed the sofa. Peace talks are scheduled for next Tuesday.",
  },
  {
    id: 2,
    title: "Man Finally Finds Matching Socks, Throws Celebration Dinner",
    description:
      "After three long years of chaos, Dave discovered two identical socks. Sources confirm the menu included spaghetti and tears of joy.",
  },
  {
    id: 3,
    title: "AI Assistant Accidentally Orders 400 Pounds of Bananas",
    description:
      "A minor typo turned a grocery order into a tropical disaster. Neighbors have been warned: banana bread is coming.",
  },
  {
    id: 4,
    title: "Grandma Accidentally Joins a Rock Band, Now on Tour",
    description:
      "What started as a karaoke night ended with Grandma Linda playing drums for ‘The Electric Pickles.’ First stop: Las Vegas.",
  },
  {
    id: 5,
    title: "Pigeon Steals Hot Dog, Becomes Internet Sensation",
    description:
      "Witnesses say the bird looked both ways before flying off. Experts are calling it 'the most polite theft in avian history.'",
  },
  {
    id: 6,
    title: "Man Tries to Fix Wi-Fi, Takes Down Entire Neighborhood",
    description:
      "Residents report chaos after Steve’s 'quick router reboot' resulted in a blackout of all streaming services within a three-mile radius.",
  },
  {
    id: 7,
    title: "Dog Learns Doorbell Equals Treats, Rings 87 Times in One Hour",
    description:
      "The clever pup, now nicknamed 'Ding-Dong,' is reportedly in negotiations for more snacks.",
  },
];

export function getNextId(){
  return id++;
}