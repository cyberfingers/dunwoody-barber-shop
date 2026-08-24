const business = {
  name: "Dunwoody Barber Shop",
  owner: "Kevin Lam",
  phoneDisplay: "(770) 396-8500",
  phoneHref: "+17703968500",
  email: "kevinlam59@yahoo.com",
  street: "5064 Nandina Lane",
  locality: "Dunwoody, GA 30338",
};

const services = [
  {
    number: "01",
    title: "Regular Haircut",
    price: 30,
  },
  {
    number: "02",
    title: "Boys Haircut",
    price: 30,
  },
  {
    number: "03",
    title: "Razor Cut",
    price: 35,
  },
  {
    number: "04",
    title: "Facial Shave",
    price: 35,
  },
  {
    number: "05",
    title: "Beard Trim",
    price: 15,
  },
  {
    number: "06",
    title: "Shampoo",
    price: 10,
  },
];

const hours = [
  ["Monday", "Closed"],
  ["Tuesday", "8:00 AM – 6:00 PM"],
  ["Wednesday", "8:00 AM – 6:00 PM"],
  ["Thursday", "8:00 AM – 6:00 PM"],
  ["Friday", "8:00 AM – 6:00 PM"],
  ["Saturday", "8:00 AM – 2:00 PM"],
  ["Sunday", "Closed"],
];

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=5064+Nandina+Lane+Dunwoody+GA+30338";

const schema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: business.name,
  description:
    "A neighborhood barbershop in Dunwoody, Georgia offering traditional haircuts, scissor and clipper work, and grooming services.",
  telephone: business.phoneHref,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: "Dunwoody",
    addressRegion: "GA",
    postalCode: "30338",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.947419,
    longitude: -84.337064,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: business.owner,
    jobTitle: "Master Barber and Owner",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Barber Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
      },
      price: service.price,
      priceCurrency: "USD",
    })),
  },
  priceRange: "$$",
};

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top">{business.name}</a>
        <nav aria-label="Primary navigation">
          <a href="#top">Top</a>
          <a href="#services">Services</a>
          <a href="#about">Meet Kevin</a>
          <a href="#visit">Visit</a>
          <a className="nav-call" href={`tel:${business.phoneHref}`}>
            Call the Shop
          </a>
        </nav>
      </header>

      <nav className="mobile-jump-nav" aria-label="Page sections">
        <a href="#top">
          <span aria-hidden="true">↑</span>
          Top
        </a>
        <a href="#services">
          <span aria-hidden="true">✂</span>
          Services
        </a>
        <a href="#visit">
          <span aria-hidden="true">⌖</span>
          Visit
        </a>
        <a className="mobile-call" href={`tel:${business.phoneHref}`}>
          <span aria-hidden="true">☎</span>
          Call
        </a>
      </nav>

      <div id="top" className="hero">
        <div className="hero-copy" id="content" tabIndex={-1}>
          <p className="eyebrow">Dunwoody Barber Shop</p>
          <h1>Your neighborhood barber in Dunwoody.</h1>
          <p className="hero-tagline">
            A proper haircut. <em>Done with care.</em>
          </p>
          <p className="hero-intro">
            Classic barbering, thoughtful detail, and a friendly chair waiting for you.
            Stop by and see Kevin at Dunwoody Barber Shop.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${business.phoneHref}`}>
              Call {business.phoneDisplay}
            </a>
            <a className="text-link" href={directionsUrl} target="_blank" rel="noreferrer">
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="walk-in">Walk-ins welcome · Call ahead for timing</p>
        </div>

        <div className="hero-art" aria-label="Classic barbershop motif">
          <div className="pole" aria-hidden="true">
            <div className="pole-cap" />
            <div className="pole-stripes" />
            <div className="pole-cap pole-cap-bottom" />
          </div>
          <p className="since">Dunwoody, Georgia</p>
          <div className="hero-note">
            <span>Master Barber & Owner</span>
            <strong>Kevin Lam</strong>
          </div>
        </div>
      </div>

      <section className="intro-band" aria-label="Shop qualities">
        <p>Traditional craft</p>
        <span aria-hidden="true">✦</span>
        <p>Personal service</p>
        <span aria-hidden="true">✦</span>
        <p>Local shop</p>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">At the shop</p>
          <h2>Good grooming,<br />without the fuss.</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-meta">
                <span>{service.number}</span>
                <strong>${service.price}</strong>
              </div>
              <h3>{service.title}</h3>
            </article>
          ))}
        </div>
        <p className="service-note">
          Questions about a cut or grooming service? Call the shop and Kevin will be happy
          to help.
        </p>
      </section>

      <section className="about-section" id="about">
        <figure className="about-photo">
          <img
            src="/kevin-lam-dunwoody-barber-shop.webp"
            alt="Kevin Lam, master barber and owner, inside Dunwoody Barber Shop"
            width="1600"
            height="1200"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Kevin Lam · Master Barber & Owner</figcaption>
        </figure>
        <div className="about-story">
          <div className="about-quote" aria-hidden="true">“</div>
          <blockquote>
            <p>Old-school attention to detail, with a style that fits today.</p>
          </blockquote>
          <div className="about-copy">
            <p className="eyebrow">Meet your barber</p>
            <h2>Kevin Lam</h2>
            <p>
              Kevin is the master barber and owner of Dunwoody Barber Shop. His approach is
              simple: listen well, take the time to get the details right, and make every
              customer feel at home.
            </p>
          </div>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-lead">
          <p className="eyebrow">Plan your visit</p>
          <h2>Come by the shop.</h2>
          <p>
            Conveniently located on Nandina Lane near Dunwoody Village, with free parking
            available nearby.
          </p>
          <address>
            <strong>{business.street}</strong>
            <span>{business.locality}</span>
          </address>
          <a className="button button-light" href={directionsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </div>
        <div className="hours-card">
          <h3>Shop Hours</h3>
          <dl>
            {hours.map(([day, time]) => (
              <div key={day}>
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
          <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
        </div>
      </section>

      <section className="contact-strip">
        <p>Ready for a fresh cut?</p>
        <a href={`tel:${business.phoneHref}`}>Call the shop <span aria-hidden="true">→</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">{business.name}</a>
        <div>
          <p>{business.street}, {business.locality}</p>
          <p>
            <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {business.name}</p>
        <p className="accessibility-note">
          <strong>Accessibility assistance:</strong> If you have difficulty using any
          part of this website, call <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
          {" "}or email <a href={`mailto:${business.email}`}>{business.email}</a>. {business.name}
          {" "}will be happy to help and welcomes reports of accessibility barriers.
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
