import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const homeLink = "/home";
  const aboutLink = "/about";
  const eventsLink = "/events";
  const blogsLink = "/blogs";
  const membersLink = "/members";
  const resourcesLink = "/resources";
  const contactUsLink = "/contact_us";
  const ccEmailLink = "mailto:codingclub@iiitvadodara.ac.in";
  const linkedInLink = "https://www.linkedin.com/company/iiitvcc/";
  const twitterLink = "https://x.com/iiitvcc";
  const instagramLink = "https://www.instagram.com/codingclub_iiitv/";
  const githubLink = "https://github.com/iiitv";
  const discordLink = "https://discord.gg/RgGAHarP";

  return (
    <footer className="bg-background border-t border-foreground/10 max-w-7xl mx-auto">
      {/* Main Content */}
      <div className=" px-6 py-16">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-8 mb-16">
            <Image
              src="/iiitv-logo.svg"
              width={100}
              height={100}
              alt="IIITV Logo"
              className="w-20 h-20"
            />
            <h3 className="text-7xl font-bold tracking-tight">
              Coding Club IIITV
            </h3>
          </div>
          {/* <p className="text-sm text-muted-foreground leading-relaxed">
            Empowering students through code. Join our vibrant community of
            developers and innovators.
          </p>*/}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={aboutLink}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={blogsLink}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Blogs
                </Link>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex-row items-center gap-4 mt-4">
              <p className="text-sm font-semibold text-foreground mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                <Link
                  href={githubLink}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href={twitterLink}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href={linkedInLink}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href={instagramLink}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href={discordLink}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Discord"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={resourcesLink}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link
                  href={membersLink}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href={contactUsLink}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href={githubLink}
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Get Help
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={discordLink}
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href={ccEmailLink}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Email Support
                </Link>
              </li>
              <li>
                <Link
                  href={contactUsLink}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Report an Issue
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            Made with ❤️ by the{" "}
            <Link
              href="/members"
              className="text-primary hover:underline"
              prefetch={false}
            >
              Coding Club Team
            </Link>
          </p>
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} IIIT Vadodara Coding Club. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
