import Image from '../../images/exam.svg'
import house from '../../images/house.svg'
import graduation from '../../images/graduation.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'About Us',
  headline: 'Who we are and what we do',
  description: 'Find out more about our history, our team, and what makes us successful',
  buttonLabel: 'Get started',
  imgStart: false,
  img: Image,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjTwo = {
  id: 'guardian',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Guardianship',
  headline: 'Are you looking for a guardian?',
  description: 'A guardian is a person who has been chosen by a student’s parents to provide pastoral and academic care, ensuring the well-being and safety of the student whilst they are studying in the UK. A guardian acts on behalf of parents at such times as is reasonably required.',
  buttonLabel: 'Find a guardian',
  imgStart: true,
  img: graduation,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjThree = {
  id: 'homestay',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Homestay',
  headline: 'Become a homestay today!',
  description: 'Every year thousands of young people studying in the UK become part of a new family – some for a short time, others for a little longer. But each will create memories, have positive experiences, and build lasting bonds thanks to the amazing homestay families who step in as the students’ home away from home.',
  buttonLabel: 'Become a homestay',
  imgStart: false,
  img: house,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true
};