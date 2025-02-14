import FlexBox from "@/components/flex-box/flex-box";
import Twitter from "@/images/icons/Twitter";
import Youtube from "@/images/icons/Youtube";
import Facebook from "@/images/icons/Facebook";
import Instagram from "@/images/icons/Instagram";
import WhatsApp from "@/images/icons/Whatsapp";
import LinkedIn from "@/images/icons/LinkedIn";
import Gmail from "@/images/icons/Gmail";
// import GoogleMaps from "@/images/icons/GoogleMaps";

export const SOCIAL_ICON_LINKS = [
  // { Icon: Facebook, url: "https://www.facebook.com/" },
  // { Icon: Twitter, url: "" },
  // {
  //   Icon: Youtube,
  //   url: "https://www.youtube.com/",
  // },
  {
    Icon: Instagram,
    url: "https://www.instagram.com/nestandnookinterior/",
  },
  {
    Icon: LinkedIn,
    url: "https://www.linkedin.com/company/nest-nook-interior/",
  },
  { Icon: WhatsApp, url: "https://wa.me/8447041309" },
  {
    Icon: Gmail,
    url: "mailto:contact@nestandnookinterior.com?subject=Hello%20There&body=I%20hope%20this%20message%20finds%20you%20well.",
  },
  // { Icon: GoogleMaps, url: "" },
];

export default function SocialLinks() {
  return (
    <FlexBox className="flex mb-1" mx={-0.625}>
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
