const destinations = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
      category: "Beach-side",
    },
    {
      title: "Luxury Mountain Cabin",
      description:
        "A serene retreat nestled in the mountains with breathtaking views and cozy amenities.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1569939256106-355b2a4867ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Aspen",
      country: "United States",
      category: "Mountain-View",
    },
    {
      title: "Modern City Room",
      description:
        "Enjoy your stay in the heart of the city with this modern and comfortable room.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1576698485667-0ed7d563c230?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "New York",
      country: "United States",
      category: "Rooms",
    },
    {
      title: "Floating Boathouse",
      description:
        "Stay in a luxurious boathouse with panoramic water views and top-notch amenities.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1519677489633-3c9741e0c783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Seattle",
      country: "United States",
      category: "Boat-House",
    },
    {
      title: "5-Star Oceanfront Resort",
      description:
        "Experience ultimate luxury in this world-class oceanfront resort with impeccable service.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1572502620082-7b9c391e9870?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Maui",
      country: "United States",
      category: "5-star",
    },
    {
      title: "Forest Treehouse Escape",
      description:
        "Reconnect with nature in this secluded treehouse nestled in a serene forest.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1561574319-b9d1dc3c0bb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 1300,
      location: "Portland",
      country: "United States",
      category: "Forest-Houses",
    },
    {
      title: "Trending Tropical Villa",
      description:
        "Stay in this Instagram-worthy villa with stunning views and private pools.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1598277438258-f1841b1f9050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Bali",
      country: "Indonesia",
      category: "Trending",
    },
    {
      title: "Classic European Hotel",
      description:
        "A timeless hotel offering comfort, luxury, and exceptional service in the heart of the city.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1558977334-5a0be0bb0049?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Paris",
      country: "France",
      category: "Hotels",
    },
    {
      title: "Mountain Chalet Retreat",
      description:
        "Unwind in this picturesque chalet with scenic mountain views and cozy interiors.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1575467677633-e05af05a6fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Zermatt",
      country: "Switzerland",
      category: "Mountain-View",
    },
    {
      title: "Secluded Forest Cabin",
      description:
        "A peaceful escape in the heart of a lush forest with modern comforts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1561574319-b9d1dc3c0bb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 1700,
      location: "Vancouver",
      country: "Canada",
      category: "Forest-Houses",
    },
    {
      title: "Beachfront Paradise Villa",
      description:
        "An exotic beachfront villa with modern design, private pools, and tranquil ocean sounds.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1588125677685-58702c0b66a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 3200,
      location: "Maldives",
      country: "Maldives",
      category: "Beach-side",
    },
    {
      title: "Rustic Wooden Cabin",
      description:
        "Cozy wooden cabin surrounded by pristine lakes and towering pine trees.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1509744640531-5e8ff0f3c1a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      },
      price: 1400,
      location: "Banff",
      country: "Canada",
      category: "Forest-Houses",
    },
        {
          title: "Cozy Beachfront Cottage",
          description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 1500,
          location: "Malibu",
          country: "United States",
          category: "Beach-side",
        },
        {
          title: "Luxury Mountain Cabin",
          description:
            "A serene retreat nestled in the mountains with breathtaking views and cozy amenities.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1569939256106-355b2a4867ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 1800,
          location: "Aspen",
          country: "United States",
          category: "Mountain-View",
        },
        {
          title: "Modern City Room",
          description:
            "Enjoy your stay in the heart of the city with this modern and comfortable room.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1576698485667-0ed7d563c230?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 900,
          location: "New York",
          country: "United States",
          category: "Rooms",
        },
        {
          title: "Floating Boathouse",
          description:
            "Stay in a luxurious boathouse with panoramic water views and top-notch amenities.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1519677489633-3c9741e0c783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 2000,
          location: "Seattle",
          country: "United States",
          category: "Boat-House",
        },
        {
          title: "5-Star Oceanfront Resort",
          description:
            "Experience ultimate luxury in this world-class oceanfront resort with impeccable service.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1572502620082-7b9c391e9870?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 5000,
          location: "Maui",
          country: "United States",
          category: "5-star",
        },
        {
          title: "Forest Treehouse Escape",
          description:
            "Reconnect with nature in this secluded treehouse nestled in a serene forest.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1561574319-b9d1dc3c0bb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 1300,
          location: "Portland",
          country: "United States",
          category: "Forest-Houses",
        },
        {
          title: "Trending Tropical Villa",
          description:
            "Stay in this Instagram-worthy villa with stunning views and private pools.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1598277438258-f1841b1f9050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 2200,
          location: "Bali",
          country: "Indonesia",
          category: "Trending",
        },
        {
          title: "Classic European Hotel",
          description:
            "A timeless hotel offering comfort, luxury, and exceptional service in the heart of the city.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1558977334-5a0be0bb0049?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 3500,
          location: "Paris",
          country: "France",
          category: "Hotels",
        },
        {
          title: "Mountain Chalet Retreat",
          description:
            "Unwind in this picturesque chalet with scenic mountain views and cozy interiors.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1575467677633-e05af05a6fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 2500,
          location: "Zermatt",
          country: "Switzerland",
          category: "Mountain-View",
        },
        {
          title: "Secluded Forest Cabin",
          description:
            "A peaceful escape in the heart of a lush forest with modern comforts.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1561574319-b9d1dc3c0bb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          },
          price: 1700,
          location: "Vancouver",
          country: "Canada",
          category: "Forest-Houses",
        },
        // Repeat similar structures for the remaining destinations...
      ];
      
    // Repeat similar patterns for more entries
  
  
  module.exports = { data: destinations };