const navbarNavigation = [
  {
    title: "Category",
    child: [
      {
        title: "Stretchable Ceiling",
        child: [
          { title: "3D", url: "/" },
          { title: "Printed", url: "/" },
        ],
      },
      {
        title: "Profile",
        child: [
          { title: "View Profile", url: "/profile" },
          {
            title: "Edit Profile",
            url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
          },
        ],
      },
      {
        title: "Address",
        child: [
          { title: "Address List", url: "/address" },
          {
            title: "Add Address",
            url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
          },
        ],
      },
      {
        title: "Support tickets",
        child: [
          { title: "All tickets", url: "/support-tickets" },
          {
            title: "Ticket details",
            url: "/support-tickets/when-will-my-product-arrive",
          },
        ],
      },
      { title: "Wishlist", url: "/wish-list" },
    ],
  },
];

export default navbarNavigation;
