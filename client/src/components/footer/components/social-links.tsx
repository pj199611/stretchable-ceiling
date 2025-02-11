import FlexBox from "@/components/flex-box/flex-box";
import Twitter from "@/images/icons/Twitter";
import Youtube from "@/images/icons/Youtube";
import Facebook from "@/images/icons/Facebook";
import Instagram from "@/images/icons/Instagram";
import WhatsApp from "@/images/icons/Whatsapp";
import Gmail from "@/images/icons/Gmail";

export const SOCIAL_ICON_LINKS = [
  { Icon: Facebook, url: "https://www.facebook.com/" },
  { Icon: Twitter, url: "https://wa.me/8447041309" },
  { Icon: WhatsApp, url: "https://wa.me/8447041309" },
  {
    Icon: Youtube,
    url: "https://www.youtube.com/",
  },
  {
    Icon: Instagram,
    url: "https://www.instagram.com/nestandnookinterior/",
  },
  // { Icon: Gmail, url: "contact@nestandnookinterior.com" },
];

export default function SocialLinks() {
  return (
    <FlexBox className="flex" mx={-0.625}>
      {SOCIAL_ICON_LINKS.map(({ Icon, url }, ind) => (
        <a href={url} target="_blank" rel="noreferrer noopenner" key={ind}>
          <div style={{ padding: "0px 9px 10px 0px" }}>
            <Icon />
          </div>
        </a>
      ))}
    </FlexBox>
  );
}
