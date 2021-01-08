export const getAlbum = (album) => {
  switch (album) {
    case 'fireworks':
      return {
        name: 'the fun of watching fireworks',
        released: 'Released 8/20/96 on Emperor Jones',
        color: '#FEC056',
        tracks: [
          'Diana Slowburner II  5:23',
          'On My Way  9:51',
          'Gone to Earth  7:03',
          "On the Run is Where I'm From  6:16",
          'Dim Stars (The Boy in My Arms)  6:14',
          'Trespassers in the Stereo Field  1:22',
          'Too Tired to Shine II  6:05',
          "It's Alright  1:47",
        ],
      };
    case 'livingroom':
      return {
        name: 'from our living room to yours',
        released: 'Released 7/8/97 on Emperor Jones',
        color: '#FAAF66',
        tracks: [
          'Magnificent Seventies  8:57',
          'Using the Hope Diamond as a Doorstop  2:45',
          'Blue Chaise  6:38',
          'Where Have All the Good Boys Gone  5:37',
          'White House  5:13',
          'Two Way Diamond I  4:08',
          'Two Way Diamond II  4:28',
          "Don't Wake Me  6:55",
        ],
      };
    case 'thegoldenband':
      return {
        name: 'the golden band',
        released: 'Released 7/6/99 on Emperor Jones',
        color: '#F9A66C',
        tracks: [
          'Weather Report  2:53',
          'A Good Friend Is Always Around  2:32',
          "It's All About Us  6:29",
          "A Schoolboy's Charm  4:22",
          'The Wait  3:09',
          'New Drifters i  2:00',
          'New Drifters ii  3:13',
          'New Drifters iii  3:41',
          'New Drifters iv  0:46',
          'Golden Band  3:00',
          'I Must Soon Quit the Scene  5:39',
          'Will the Real Danny Radnor Please Stand?  2:32',
        ],
      };
    case 'knownbyheart':
      return {
        name: 'known by heart',
        released: 'Released 9/4/01 on Tiger Style',
        color: '#F79574',
        tracks: [
          'Punk As Fuck  4:09',
          'The Only One  2:15',
          'Like Foxes Through Fences  3:37',
          'The Postman  2:59',
          'Choir Vandals  3:01',
          'Gone to Earth  3:13',
          'Million Young  3:27',
          'Kindness of Strangers  3:26',
          'Know By Heart  2:53',
          'Slow Company  3:00',
          'Aaron and Maria  3:10',
          "We're Computerizing and We Just Don't Need You Anymore  5:51",
        ],
      };
    case 'promiseoflove':
      return {
        name: 'promise of love',
        color: '#F89E70',
        released: 'Released 7/17/03 on Tiger Style',
        tracks: [
          'Continuous Hit Music  4:27',
          'Hard to Find  4:17',
          'Come Home Baby Julie, Come Home  5:53',
          'You Own Me  5:05',
          'Promise of Love  2:13',
          'The Hatist  3:43',
          'Fool Around"  5:36',
          'Modern Drummer  8:02',
        ],
      };
    case 'setfree':
      return {
        name: 'set free',
        released: 'Released 9/20/05 on Arts & Crafts',
        color: '#F4847B',
        tracks: [
          'Born on the Cusp  3:28',
          'Immaculate Heart 1  2:39',
          'Immaculate Heart 2  2:12',
          'Cool Kids Keep 3:44',
          "She's Half  4:29",
          'JR (Originally by the band Codeine) 3:41',
          'Play Hurt  4:32',
          '(Theme from) Everything Ends  2:15',
          'Sharp Briar  2:42',
          'The Green Green Grass  3:32',
          'First of Four  3:04',
          "Fuck This... I'm Leaving  5:18",
        ],
      };
    case 'hardtofind':
      return {
        name: 'hard to find: singles and unreleased',
        released: 'Released 4/17/09 on Hometown Fantasy',
        color: '#f37b7e',
        tracks: [
          'Stoney Chariots  5:30',
          'New Equation  3:44',
          'Make It Take It  4:32',
          ' Sharp Briar (feat. Matt Pond)  2:42',
          'Choir Vandals (demo / Muscle Beach mix)  2:48',
          'Cool Kids Keep (ep version)  8:05',
          ' First of Four (ep version)  7:52',
          'The Only Living Boy Around (Know By Heart session) 3:48',
          'Hard To Find (original / extended)  5:55',
          'Hard To FInd (reprise)  1:55',
          'All I Want For Christmas  2:02',
          'Green Green Grass (ep version)  7:41',
          'Everything Ends In Spring (ep version)  8:47',
        ],
      };
    default:
      console.log('defo');
  }
};
