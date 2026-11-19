const model = { url: "/__l5e/assets-v1/1f9a58af-2bf5-4941-9987-9a6158bf895b/room.glb" };
const titleFont = { url: "/__l5e/assets-v1/62dc8cd7-8c82-4da0-b494-fbf3e1a3f56c/unione.json" };
const subtitleFont = { url: "/__l5e/assets-v1/2fe66e4f-7015-4d42-ab16-7e00a9bc6c48/helvatica.json" };
const screenVideo = { url: "/__l5e/assets-v1/729cb804-0baf-4645-9908-ffe7f5d49d7b/arcane.mp4" };
const logo = { url: "/__l5e/assets-v1/931e74ca-77cd-440d-9463-83299b81b3d5/logo-e.png" };
const adminAndMobile = { url: "/__l5e/assets-v1/b9fd6f37-2002-468d-989d-78ee1ae90d78/adminandmobile.jpg" };
const proshop = { url: "/__l5e/assets-v1/95ea31ff-374f-465d-96c0-bea7f7f4785d/proshop.png" };
const myTeachers = { url: "/__l5e/assets-v1/b181075c-4f77-417d-b7a3-58eea87a8114/project-myteachers.webp" };
const wholesale = { url: "/__l5e/assets-v1/e4af6da2-4f6c-4a01-a452-ecbba41afd45/project-wholesale.jpg" };
const chatApp = { url: "/__l5e/assets-v1/2e704a71-2ef6-46bb-8194-a6b3a31470f1/chatApp.jpg" };
const audio = { url: "/__l5e/assets-v1/a808364e-1abf-4fa5-b365-3d33a1af232f/audio.png" };

export const roomAssets = {
  model: model.url,
  titleFont: titleFont.url,
  subtitleFont: subtitleFont.url,
  screenVideo: screenVideo.url,
  logo: logo.url,
};

export type RoomProject = { image: string; url: string; mobileUrl?: string };

export const roomProjects: RoomProject[] = [
  { image: adminAndMobile.url, url: "https://aregenkibet.web.app", mobileUrl: "https://adminpanel-bx43q6fid-ezadin-badrus-projects.vercel.app/" },
  { image: proshop.url, url: "https://github.com/ezadin2/proshop-demo.git" },
  { image: myTeachers.url, url: "https://abuanwar072.github.io/Flutter-Responsive-Admin-Panel-or-Dashboard/" },
  { image: wholesale.url, url: "https://github.com/ezadin2/Flight-Booking-App-Flutter.git" },
  { image: chatApp.url, url: "https://github.com/ezadin2/nextjs-setup" },
  { image: audio.url, url: "https://github.com/ezadin2/Audio-player.git" },
  { image: "/__l5e/assets-v1/62c63c80-9170-47ae-b9e0-bb5d6dc5a231/quran.png", url: "https://hasset-delivery-front-end-side.onrender.com/" },
  { image: "/__l5e/assets-v1/26e3519a-14e5-4426-b49f-df0d627c2c0f/techxpert.png", url: "https://techxpert-rental-market-place.vercel.app/" },
  { image: "/__l5e/assets-v1/0bf6f64b-b01a-40cb-9e16-2b40e01bb474/my-quran-onrender.png", url: "https://my-quran.onrender.com/" },
  { image: "/__l5e/assets-v1/79e13cdd-90c0-43bc-a346-d92f438ba794/qemer.png", url: "https://qemer-final-project.vercel.app/" },
  { image: "/__l5e/assets-v1/b6c364cc-7d71-42da-a0a1-f68f61bac2c6/qemer-fb.png", url: "https://ezadin2.github.io/qemer_tech_project_facebookpage/" },
];

export const ROOM_PAGE_SIZE = 6;
