import type {Metadata} from './metadata-types';
import {type Locale, localizedPath, pick} from './i18n';
import {absolute} from './seo';
export type EssentialPageKey = 'privacy-policy' | 'terms-of-use' | 'contact' | 'sponsorship';
export const contactEmail = 'ads.taslimul@gmail.com';
export const contactPhone = '01521405639';
export const whatsappUrl = 'https://wa.me/8801521405639';
type Section = {title: string; paragraphs: string[]};
export function essentialContent(key: EssentialPageKey, lang: Locale) {
 const choose = (en: string, bn: string) => pick(lang, en, bn);
 const content: Record<EssentialPageKey, {title: string; description: string; sections: Section[]}> = {
  'privacy-policy': {
   title: choose('Privacy Policy', 'গোপনীয়তা নীতি'),
   description: choose('How Doclist Bd handles saved doctors, browser preferences, engagement information and contact messages.', 'Doclist Bd-তে সেভ করা ডাক্তার, ব্রাউজার পছন্দ, likes/views ও যোগাযোগের তথ্য কীভাবে ব্যবহৃত হয়।'),
   sections: [
    {title: choose('Saved doctors and preferences', 'সেভ করা ডাক্তার ও আপনার পছন্দ'), paragraphs: [choose('Your Saved Docs list stores doctor IDs and expiry dates in this browser. Each saved entry expires 365 days after saving. Theme and language preferences are also stored in your browser. You can remove saved doctors individually or clear browser data. The list does not automatically sync to another device or browser.', '“আমার ডাক্তার” তালিকায় ডাক্তারের ID ও মেয়াদ শেষের তারিখ এই ব্রাউজারে সংরক্ষিত থাকে। প্রতিটি এন্ট্রি সেভ করার ৩৬৫ দিন পর মেয়াদ শেষ হয়। থিম ও ভাষার পছন্দও ব্রাউজারে থাকে। তালিকা থেকে ডাক্তার সরাতে পারেন বা ব্রাউজারের ডেটা মুছতে পারেন। তালিকা অন্য ডিভাইস বা ব্রাউজারে স্বয়ংক্রিয়ভাবে যায় না।')]},
    {title: choose('Likes, views and cookies', 'Likes, views ও cookie'), paragraphs: [choose('Doctor engagement features use a randomly generated visitor cookie, with a lifetime of up to 365 days, to recognise a browser. Doctor likes and view events may be stored on the server using this identifier and event IDs. These features do not ask you to create an account. Hosting services may process technical request information to deliver the website.', 'ডাক্তারদের likes ও views-এর জন্য একটি random visitor cookie ব্যবহার করে ব্রাউজার চেনা হয়; cookie-টির মেয়াদ সর্বোচ্চ ৩৬৫ দিন। এই identifier ও event ID ব্যবহার করে সার্ভারে likes ও view event রাখা হতে পারে। এসব সুবিধার জন্য অ্যাকাউন্ট খুলতে হয় না। ওয়েবসাইট চালাতে hosting service প্রযুক্তিগত request information প্রক্রিয়াকরণ করতে পারে।')]},
    {title: choose('Messages and external services', 'বার্তা ও বাইরের সেবা'), paragraphs: [choose('If you contact us by email or WhatsApp, your contact details and the information you send are used to respond to your enquiry. Email, WhatsApp and other external links are handled by their respective providers under their own privacy policies.', 'ইমেইল বা WhatsApp-এ যোগাযোগ করলে আপনার দেওয়া যোগাযোগের তথ্য ও বার্তা আপনার অনুরোধের উত্তর দিতে ব্যবহার করা হয়। ইমেইল, WhatsApp ও অন্যান্য বাইরের লিংকের সেবা সংশ্লিষ্ট provider-এর নিজস্ব গোপনীয়তা নীতির অধীনে পরিচালিত হয়।')]},
    {title: choose('Questions or corrections', 'প্রশ্ন বা সংশোধন'), paragraphs: [choose('Contact us using the email or WhatsApp details on our Contact page to ask about your information or request a directory correction. This policy was updated on 17 October 2026.', 'আপনার তথ্য নিয়ে প্রশ্ন বা directory-তে সংশোধনের অনুরোধ করতে Contact পেজের ইমেইল বা WhatsApp ব্যবহার করুন। এই নীতি ১৭ অক্টোবর ২০২৬-এ হালনাগাদ করা হয়েছে।')]}
   ]
  },
  'terms-of-use': {
   title: choose('Terms of Use', 'ব্যবহারের শর্তাবলি'),
   description: choose('Terms for using the Doclist Bd doctor directory and its personal saved-doctor features.', 'Doclist Bd-এর ডাক্তার directory ও ব্যক্তিগত সেভ করা তালিকা ব্যবহারের শর্তাবলি।'),
   sections: [
    {title: choose('Using the directory', 'Directory ব্যবহার'), paragraphs: [choose('Doclist Bd helps you find publicly listed doctor, hospital and chamber information. Directory inclusion is not an endorsement or independent verification of professional credentials. Listing information is for discovery and does not replace advice from a qualified healthcare professional or emergency services.', 'Doclist Bd প্রকাশ্যে তালিকাভুক্ত ডাক্তার, হাসপাতাল ও চেম্বারের তথ্য খুঁজতে সাহায্য করে। তালিকায় থাকা কোনো অনুমোদন বা পেশাগত যোগ্যতার স্বাধীন যাচাই বোঝায় না। এই তথ্য খোঁজার সুবিধার জন্য; এটি যোগ্য চিকিৎসকের পরামর্শ বা জরুরি সেবার বিকল্প নয়।')]},
    {title: choose('Appointments and listing accuracy', 'অ্যাপয়েন্টমেন্ট ও তথ্যের নির্ভুলতা'), paragraphs: [choose('Qualifications, locations, telephone numbers, schedules and fees may change. Confirm current details directly with the doctor or chamber before visiting. Phone and WhatsApp links connect you to external providers; the directory does not itself confirm appointments.', 'যোগ্যতা, অবস্থান, ফোন নম্বর, সময়সূচি ও ফি পরিবর্তিত হতে পারে। যাওয়ার আগে ডাক্তার বা চেম্বার থেকে বর্তমান তথ্য নিশ্চিত করুন। ফোন ও WhatsApp লিংক বাইরের সেবায় নিয়ে যায়; directory নিজে অ্যাপয়েন্টমেন্ট নিশ্চিত করে না।')]},
    {title: choose('Responsible use and content', 'দায়িত্বশীল ব্যবহার ও কনটেন্ট'), paragraphs: [choose('Use the website without interfering with its operation, submitting misleading information or attempting unauthorised access. Public listing text and images may belong to their respective rights holders. Report incorrect information or concerns about content through our Contact page.', 'ওয়েবসাইটের কাজ ব্যাহত করা, বিভ্রান্তিকর তথ্য জমা দেওয়া বা অননুমোদিত প্রবেশের চেষ্টা ছাড়া সাইট ব্যবহার করুন। প্রকাশ্য listing-এর লেখা ও ছবির অধিকার সংশ্লিষ্ট স্বত্বাধিকারীর হতে পারে। ভুল তথ্য বা কনটেন্ট নিয়ে উদ্বেগ থাকলে Contact পেজ দিয়ে জানান।')]},
    {title: choose('Saved lists and availability', 'ব্যক্তিগত তালিকা ও সেবার প্রাপ্যতা'), paragraphs: [choose('Saved Docs depends on this browser’s storage. Clearing storage, changing browsers or expiry can remove entries. Website features and these terms may be updated. For questions, contact us. Last updated: 17 October 2026.', '“আমার ডাক্তার” তালিকা এই ব্রাউজারের storage-এর ওপর নির্ভর করে। storage মুছলে, ব্রাউজার বদলালে বা মেয়াদ শেষ হলে এন্ট্রি মুছে যেতে পারে। ওয়েবসাইটের সুবিধা ও এই শর্তাবলি হালনাগাদ হতে পারে। প্রশ্ন থাকলে যোগাযোগ করুন। সর্বশেষ হালনাগাদ: ১৭ অক্টোবর ২০২৬।')]}
   ]
  },
  contact: {
   title: choose('Contact', 'যোগাযোগ'),
   description: choose('Contact Doclist Bd about doctor information, website feedback or general enquiries.', 'ডাক্তারের তথ্য সংশোধন, ওয়েবসাইটের মতামত বা সাধারণ প্রশ্নে Doclist Bd-এর সঙ্গে যোগাযোগ করুন।'),
   sections: [
    {title: choose('Listing corrections and feedback', 'তথ্য সংশোধন ও মতামত'), paragraphs: [choose('For a correction, include the doctor or hospital name, the profile link and the information that needs updating. A relevant source link helps us review your request.', 'সংশোধনের জন্য ডাক্তার বা হাসপাতালের নাম, profile link এবং কোন তথ্য বদলানো প্রয়োজন তা লিখুন। প্রাসঙ্গিক source link দিলে অনুরোধ যাচাই করতে সুবিধা হবে।')]},
    {title: choose('Get in touch', 'সরাসরি যোগাযোগ'), paragraphs: [choose('Use the email or WhatsApp links below for website questions and feedback. For a doctor’s appointment, use the chamber contact details on the relevant doctor profile.', 'ওয়েবসাইট সংক্রান্ত প্রশ্ন ও মতামতের জন্য নিচের ইমেইল বা WhatsApp লিংক ব্যবহার করুন। ডাক্তারের অ্যাপয়েন্টমেন্টের জন্য সংশ্লিষ্ট profile-এ দেওয়া চেম্বারের নম্বরে যোগাযোগ করুন।')]}
   ]
  },
  sponsorship: {
   title: choose('Sponsorship', 'স্পনসরশিপ'),
   description: choose('Discuss sponsorship and advertising opportunities with Doclist Bd.', 'Doclist Bd-তে স্পনসরশিপ ও বিজ্ঞাপনের সুযোগ নিয়ে আলোচনা করুন।'),
   sections: [
    {title: choose('Work with Doclist Bd', 'Doclist Bd-এর সঙ্গে কাজ করুন'), paragraphs: [choose('Contact us to discuss relevant brand visibility, banner placements and sponsorship campaigns for the directory audience.', 'Directory-এর পাঠকদের কাছে প্রাসঙ্গিক brand visibility, banner placement ও sponsorship campaign নিয়ে আলোচনা করতে যোগাযোগ করুন।')]},
    {title: choose('Tell us about your campaign', 'আপনার campaign সম্পর্কে জানান'), paragraphs: [choose('Please include your company or brand name, website, campaign goal, preferred placement, dates and proposed budget. Sponsorship does not confer a verified-doctor status or influence a doctor’s listed qualifications.', 'আপনার প্রতিষ্ঠান বা brand-এর নাম, ওয়েবসাইট, campaign-এর লক্ষ্য, পছন্দের placement, সময়কাল ও প্রস্তাবিত বাজেট লিখুন। স্পনসরশিপ কোনো ডাক্তারকে verified status দেয় না বা তালিকাভুক্ত যোগ্যতা বদলায় না।')]}
   ]
  }
 };
 return content[key];
}
export function essentialMetadata(key: EssentialPageKey, lang: Locale): Metadata {
 const c=essentialContent(key,lang),path='/'+key,canonical=absolute(localizedPath(lang,path));
 return {title:c.title,description:c.description,robots:{index:true,follow:true},alternates:{canonical,languages:{'bn-BD':absolute(localizedPath('bn',path)),'en-BD':absolute(localizedPath('en',path)),'x-default':absolute(localizedPath('bn',path))}},openGraph:{title:c.title,description:c.description,url:canonical,type:'website',locale:lang==='bn'?'bn_BD':'en_BD'}};
}
