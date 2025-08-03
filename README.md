# ✨ QuoteShot

> Because your brilliant thoughts deserve to look better than a default tweet.

Quoteshot is a fast, focused, and frictionless web application for creating beautiful quote cards in seconds. Perfect for your Instagram story, X feed, or just for yourself.

**[➡️ Live Demo Coming Soon\!](https://www.google.com/search?q=https://quoteshot.vercel.app)**

_("public/demo.jpeg)_

---

## 🎯 About The Project

This project was built as an MVP to showcase a polished, real-world application using a modern tech stack. The goal was to go beyond a simple to-do list and create a delightful, useful tool that could serve as the foundation for a full-fledged SaaS product.

The entire development process, from initial concept to the final polished MVP, was a collaborative effort between [bit2swaz](https://github.com/bit2swaz) and a peer-programming AI.

### ✅ Key Features (MVP)

- **Responsive Landing Page:** A fully animated, modern landing page to attract users.
- **Dynamic Canvas:** A powerful editor to design your quote card.
- **Draggable Text:** Easily position your text exactly where you want it.
- **Live Style Editing:** Change fonts, colors, and sizes in real-time.
- **Dynamic Backgrounds:** Choose from solid colors or search millions of high-quality images from Unsplash.
- **Resolution Presets:** Start with pre-defined sizes for social media posts and stories.
- **One-Click Export:** Download your creation as a high-quality PNG or get all preset sizes in a single ZIP file.
- **State Persistence:** Your last design is automatically saved in your browser, so you can pick up right where you left off.

### 🛠️ Built With

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **App Scaffolding:** [T3 Stack](https://create.t3.gg/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Canvas & Graphics:** [Konva.js](https://konvajs.org/) & [react-draggable](https://github.com/react-grid-layout/react-draggable)
- **Image Export:** [html-to-image](https://github.com/bubkoo/html-to-image)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- pnpm

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/bit2swaz/quoteshot-v1.git
    ```
2.  **Install PNPM packages**
    ```sh
    pnpm install
    ```
3.  **Set up your environment variables**
    - Create a file named `.env.local` in the root of the project.
    - Get a free API key from [Unsplash Developers](https://unsplash.com/developers).
    - Add your key to the `.env.local` file:
      ```
      NEXT_PUBLIC_UNSPLASH_ACCESS_KEY='your_unsplash_access_key'
      ```
4.  **Run the development server**
    ```sh
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🗺️ Roadmap

This MVP is just the beginning. The following is the roadmap to evolve QuoteShot into a full SaaS product.

### ✅ Week 1: Launch the Banger MVP

- [x] Launch a polished, free-to-use quote generator.
- [x] Validate the core concept and gather initial feedback.

### 🔲 Week 2: User Accounts & Cloud Foundation

- [ ] **Authentication:** Implement `NextAuth.js` with social logins.
- [ ] **Database:** Set up Prisma for `User` and `Design` models.
- [ ] **Cloud Saving:** Build tRPC endpoints to save designs to a user's account.
- [ ] **Dashboard:** Create a protected page for users to view their saved designs.

### 🔲 Week 3: Premium Monetization

- [ ] **Payments:** Integrate Stripe for monthly/annual subscriptions.
- [ ] **Premium Assets:** Add exclusive fonts and background packs.
- [ ] **Premium Features:** Build a Gradient Generator, Custom Resolution input, and Brand Kit features for paying users.

### 🔲 Week 4: Full SaaS Launch

- [ ] **Marketing Pages:** Build out `/pricing`, `/about`, and `/contact` pages.
- [ ] **Refine Landing Page:** Update the homepage to highlight premium features.
- [ ] **Launch\!** Announce the full version across social channels.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## ♥️ Acknowledgements

Made with ❤️ by [**bit2swaz**](https://github.com/bit2swaz).
