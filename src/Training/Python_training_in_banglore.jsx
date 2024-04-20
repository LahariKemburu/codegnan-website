import Training_template from "./Training_template";
const headData = {
  title: "Best Python Course Training In Bangalore",
  p: "Become a skilled Python developer with Codegnan’s exclusive Python training course in Bangalore. We are one of the top Python training centres in Bangalore offering carefully crafted courses to those who want to become master coders. With the guidance of our expert faculty panel, we make sure that each of our students is prepared for a lucrative Python career ahead.",
  language:"English",
  duration:"1 Month",
  prici: "8,000",
  rating:"2,277"
};

const middleData = {
  title: "Middle Title",
  p: "Paragraph for middle",
  link: "https://example.com/middle"
};
export default function Python_training_in_banglore() {
  return (
    <div>
      <Training_template head={headData}/>
    </div>
  );
}