"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  IconSearch,
  IconHeart,
  IconBag,
  IconMenu,
  IconClose,
  IconChevron,
} from "@/components/ui/Icons";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { collections } from "@/data/collections";
import {
  categoryLabels,
  getBestSellers,
  getNewArrivals,
  formatPrice,
  type ProductCategory,
} from "@/data/products";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop", mega: true },
  { href: "/collections", label: "Collections" },
  { href: "/experiences", label: "Experiences" },
  { href: "/profiles", label: "Profiles" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const categories = Object.entries(categoryLabels) as [ProductCategory, string][];

const megaSections = [
  { title: "Best Sellers", href: "/shop?filter=best-sellers" },
  { title: "New Arrivals", href: "/shop?filter=new-arrivals" },
  { title: "Mood Collections", href: "/shop?filter=mood" },
  { title: "Gift Collections", href: "/shop?category=gift-sets" },
  { title: "Seasonal Campaigns", href: "/collections/seasonal" },
  { title: "Room Experiences", href: "/experiences" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const bestSellers = getBestSellers().slice(0, 3);
  const newArrivals = getNewArrivals().slice(0, 2);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div
          className={`mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 transition-all duration-500 md:px-6 md:py-3.5 ${
            scrolled || megaOpen || mobileOpen
              ? "glass-nav"
              : "rounded-full border border-white/30 bg-white/25 backdrop-blur-xl"
          }`}
        >
          <button
            type="button"
            className="lg:hidden rounded-full p-2 text-charcoal/80 hover:bg-white/50"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <IconMenu />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 4).map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(!!link.mega)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[12px] tracking-[0.08em] uppercase text-charcoal/75 transition-colors hover:bg-white/50 hover:text-charcoal"
                >
                  {link.label}
                  {link.mega && <IconChevron />}
                </Link>
              </div>
            ))}
          </nav>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5"
            aria-label="AURELIA home"
          >
            <Image
              src="/brand/aurelia-mark.jpg"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 rounded-full object-cover shadow-sm ring-1 ring-charcoal/10 md:h-9 md:w-9"
              priority
            />
            <span className="font-display text-[18px] md:text-[22px] tracking-[0.28em] text-charcoal">
              AURELIA
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-1 md:gap-2">
            <nav className="hidden lg:flex items-center gap-1 mr-2">
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[12px] tracking-[0.08em] uppercase text-charcoal/75 transition-colors hover:bg-white/50 hover:text-charcoal"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              className="rounded-full p-2.5 text-charcoal/80 hover:bg-white/50 transition-colors"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <IconSearch size={18} />
            </button>
            <Link
              href="/shop"
              className="hidden sm:flex rounded-full p-2.5 text-charcoal/80 hover:bg-white/50 transition-colors"
              aria-label="Wishlist"
            >
              <IconHeart size={18} />
            </Link>
            <Link
              href="/shop"
              className="rounded-full p-2.5 text-charcoal/80 hover:bg-white/50 transition-colors"
              aria-label="Cart"
            >
              <IconBag size={18} />
            </Link>
            <div className="hidden sm:block ml-1">
              <SignOutButton />
            </div>
          </div>
        </div>

        {/* Mega menu */}
        <div
          className={`mx-auto mt-3 max-w-[1280px] overflow-hidden transition-all duration-500 ${
            megaOpen
              ? "max-h-[520px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="glass-strong glass-panel p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3 space-y-4">
                <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/45">
                  Discover
                </p>
                <ul className="space-y-2.5">
                  {megaSections.map((s) => (
                    <li key={s.title}>
                      <Link
                        href={s.href}
                        className="font-display text-[15px] text-charcoal/80 hover:text-charcoal transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3 space-y-4">
                <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/45">
                  Categories
                </p>
                <ul className="space-y-2.5">
                  {categories.map(([id, label]) => (
                    <li key={id}>
                      <Link
                        href={`/shop?category=${id}`}
                        className="text-sm text-charcoal/70 hover:text-charcoal transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3 space-y-4">
                <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/45">
                  Collections
                </p>
                <ul className="space-y-2.5">
                  {collections.map((c) => (
                    <li key={c.id}>
                      <Link
                        href={`/collections/${c.slug}`}
                        className="text-sm text-charcoal/70 hover:text-charcoal transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3 space-y-3">
                <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/45">
                  Featured
                </p>
                <div className="space-y-3">
                  {[...bestSellers.slice(0, 2), ...newArrivals.slice(0, 1)].map(
                    (p) => (
                      <Link
                        key={p.id}
                        href={`/shop/${p.slug}`}
                        className="flex gap-3 group"
                        onClick={() => setMegaOpen(false)}
                      >
                        <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-pearl/60">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="56px"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-charcoal">
                            {p.name}
                          </p>
                          <p className="text-xs text-charcoal/50">
                            {formatPrice(p.price)}
                          </p>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-charcoal/20 backdrop-blur-md px-4 pt-28">
          <div className="glass-strong w-full max-w-xl rounded-[2rem] p-6 md:p-8 relative">
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full p-2 hover:bg-white/60"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <IconClose />
            </button>
            <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal/45 mb-4">
              Search the gallery
            </p>
            <form
              action="/shop"
              onSubmit={() => setSearchOpen(false)}
              className="flex gap-3"
            >
              <input
                name="q"
                autoFocus
                placeholder="Candles, moods, rooms…"
                className="flex-1 rounded-full border border-white/60 bg-white/50 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-accent/50"
              />
              <button
                type="submit"
                className="rounded-full bg-charcoal px-6 py-3.5 text-frost text-sm"
              >
                Explore
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-charcoal/25 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[86%] max-w-sm glass-strong rounded-r-[2rem] p-6 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <span className="flex items-center gap-2.5 font-display tracking-[0.22em] text-lg">
                <Image
                  src="/brand/aurelia-mark.jpg"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover ring-1 ring-charcoal/10"
                />
                AURELIA
              </span>
              <button
                type="button"
                className="rounded-full p-2 hover:bg-white/50"
                onClick={() => setMobileOpen(false)}
                aria-label="Close"
              >
                <IconClose />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3.5 font-display text-xl text-charcoal/85 hover:bg-white/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8 space-y-3">
              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-full bg-charcoal py-3.5 text-center text-sm text-frost"
              >
                Enter the Shop
              </Link>
              <div className="flex justify-center">
                <SignOutButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
