// app/portfolio/page.jsx  (or pages/portfolio.jsx)
// If you want this to be a client component, add "use client" on top.

export default function PortfolioPage() {
    const gallery = [
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-01-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-03-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-02-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-05-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-04-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-06-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-07-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-09-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-08-free-img.jpg",
    ];

    return (
        <main className="min-h-screen bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page header */}
                <header className="mb-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Portfolio</h1>
                    <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
                        A selection of UI/UX work, illustrations and project screenshots.
                    </p>
                </header>

                {/* Hero image */}
                <section className="mb-12 flex justify-center">
                    <img
                        src="https://zeeshanhaider.com/wp-content/uploads/2021/05/bg-05-free-img.jpg"
                        alt="Hero / featured"
                        className="max-w-full w-full md:w-3/4 lg:w-2/3 rounded shadow-md object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                </section>

                {/* UI/UX heading */}
                <section className="mb-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">UI/UX Design</h2>

                        {/* small decorative icon (keeps the original's flavor) */}
                        <div aria-hidden className="text-gray-400">
                            <svg className="w-6 h-6" viewBox="0 0 2048 2048" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section aria-label="Portfolio gallery">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {gallery.map((src, idx) => (
                            <article key={src} className="bg-white rounded-lg overflow-hidden shadow-sm">
                                <a
                                    href={src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                    aria-label={`Open image ${idx + 1}`}
                                >
                                    {/* consistent responsive crop:
                      - uses Tailwind arbitrary aspect ratio classes (JIT).
                      - if your config doesn't support that, use a fixed height instead. */}
                                    <div className="w-full aspect-[370/474] sm:aspect-[370/474] md:aspect-[370/389] lg:aspect-[370/342] overflow-hidden bg-gray-100">
                                        <img
                                            src={src}
                                            alt={`Portfolio ${idx + 1}`}
                                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="p-3 text-center">
                                        <h3 className="text-sm font-medium text-gray-700">Project {idx + 1}</h3>
                                    </div>
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Contact / CTA */}
                <section className="mt-12 bg-gradient-to-r from-white to-gray-50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <p className="text-sm text-gray-600">Interested in working together? Reach out for collaborations or inquiries.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                        >
                            Get in touch
                        </a>

                        <a
                            href="#portfolio"
                            className="inline-flex items-center justify-center px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 transition"
                        >
                            View all
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
