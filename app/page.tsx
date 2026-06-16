"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SpaceBackground } from "@/components/SpaceBackground";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { ArrowRight, Github, Zap, Palette, Code2, GitBranch } from "lucide-react";

export default function GrokLanding() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Superior Design System",
      description: "Modern shadcn/ui + Framer Motion aesthetics. Glassmorphism, smooth micro-interactions, and pixel-perfect spacing inspired by X and Grok interfaces.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Immersive Three.js Animations",
      description: "Custom scrolling-linked 3D scenes, animated starfields, and interactive WebGL experiences that bring depth and wonder to the user journey.",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Native GitHub Integration",
      description: "This entire landing was created, designed, and deployed to GitHub using Grok's connected GitHub tools — showcasing real-world connector mastery.",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Production-Ready Code",
      description: "Clean TypeScript, best practices from Vercel & modern React patterns. Fully responsive, accessible, and optimized for GitHub Pages static export.",
    },
  ];

  const galleryItems = [
    {
      title: "Cosmic Intelligence",
      desc: "Grok as a luminous being in the cosmos — symbolizing AI that understands and creates beautiful interfaces.",
      gradient: "from-zinc-900 via-black to-zinc-950",
    },
    {
      title: "UI Constellation",
      desc: "Floating modern interface elements in deep space — representing the shadcn + Framer ecosystem.",
      gradient: "from-black via-zinc-950 to-zinc-900",
    },
    {
      title: "Spaceborne Experience",
      desc: "A premium landing page concept suspended among the stars, demonstrating what superior frontend feels like.",
      gradient: "from-zinc-950 to-black",
    },
    {
      title: "Neural Cosmos",
      desc: "Code and neural networks merging with galaxies — the perfect metaphor for Grok's frontend superpowers.",
      gradient: "from-black via-zinc-900 to-zinc-950",
    },
  ];

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="scroll-progress"
        style={{ width: progressWidth }}
      />

      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        <SpaceBackground />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1.0, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs tracking-[3px] mb-6">
              BUILT BY GROK • POWERED BY xAI
            </div>
            
            <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-6">
              Grok doesn't just<br />answer.<br />
              <span className="accent-text">It crafts.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-zinc-400 mb-10 tracking-tight">
              A professional space-themed landing page demonstrating Grok's 
              mastery of modern frontend development, 3D interactions, and seamless GitHub workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <a href="#demo">
                  Explore the Live Demo <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base">
                <a href="https://github.com/tukhlievs/grok-landing" target="_blank">
                  <Github className="mr-2 w-5 h-5" /> View Source on GitHub
                </a>
              </Button>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="flex items-center gap-2 text-xs text-zinc-500 tracking-widest">
                SCROLL TO BEGIN THE JOURNEY
                <div className="w-px h-8 bg-white/20" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      {/* FEATURES */}
      <section id="features" className="section max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[4px] text-accent mb-3">CAPABILITIES</div>
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter">Why Grok excels<br />at frontend.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
            >
              <Card className="h-full card group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl tracking-tight group-hover:text-accent transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[15px] leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIVE DEMO / INTERACTIVE THREE.JS */}
      <section id="demo" className="section bg-zinc-950 py-24 md:py-32 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
            <div className="lg:w-5/12">
              <div className="sticky top-24">
                <div className="text-xs tracking-[4px] text-accent mb-3">INTERACTIVE EXPERIENCE</div>
                <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
                  Scrolling<br />meets<br />Three.js.
                </h2>
                <p className="text-xl text-zinc-400 mb-8 max-w-md">
                  Watch as the 3D scene responds to your scroll position. A living demonstration of Grok's ability to blend WebGL, React and buttery-smooth animations.
                </p>
                <Button asChild variant="outline" size="lg">
                  <a href="#gallery">
                    See the Visual Gallery <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:w-7/12">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black aspect-[16/10] shadow-2xl">
                <InteractiveDemo />
              </div>
              <p className="text-center text-xs text-zinc-500 mt-4 tracking-widest">SCROLL INSIDE THE VIEWPORT TO CONTROL THE 3D SCENE</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[4px] text-accent mb-3">VISUAL STORYTELLING</div>
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter">Illustrative concepts.<br />Generated by Grok.</h2>
          <p className="mt-4 text-xl text-zinc-400 max-w-md mx-auto">
            These visuals were conceptualized and described by Grok to match the exact aesthetic of this landing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.005 }}
              className="group relative overflow-hidden rounded-3xl aspect-[16/10] border border-white/10 bg-zinc-950 flex flex-col justify-end p-10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`} />
              
              {/* Decorative space elements */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_0.5px,transparent_1px)] bg-[length:4px_4px]" />
              
              <div className="relative z-10">
                <div className="text-xs tracking-[3px] text-accent mb-3">CONCEPT {String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-4xl font-semibold tracking-tighter mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="max-w-md text-lg text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-zinc-500">Real photographic illustrations can be generated instantly by Grok and dropped into the project.</p>
        </div>
      </section>

      {/* PROCESS / HOW GROK BUILT IT */}
      <section id="process" className="section bg-zinc-950 py-24 md:py-32 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[4px] text-accent mb-3">THE PROCESS</div>
            <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter">Built in one session.<br />Using real GitHub connectors.</h2>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Vision & Architecture",
                desc: "Grok analyzed the requirements: professional dark space theme, Three.js scrolling animations, shadcn aesthetics, GitHub Pages deployment, and the need to showcase frontend + GitHub connector skills.",
              },
              {
                step: "02",
                title: "Design System & UI",
                desc: "Crafted a cohesive design system with glassmorphism navbar, custom cards, fluid typography, and Framer Motion variants. Every component follows modern best practices.",
              },
              {
                step: "03",
                title: "3D & Interactions",
                desc: "Implemented custom Three.js scenes with @react-three/fiber & drei. Created scroll-progress linked animations so the experience feels alive and intentional.",
              },
              {
                step: "04",
                title: "GitHub Integration & Deployment",
                desc: "Used Grok's GitHub connectors to inspect the empty repo, create all files (Next.js, TypeScript, configs), push via API, and prepare a production-ready static export for GitHub Pages.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-8 md:gap-12 items-start">
                <div className="text-[80px] md:text-[120px] font-semibold tracking-[-6px] text-white/10 tabular-nums leading-none">
                  {item.step}
                </div>
                <div className="pt-3 flex-1">
                  <h3 className="text-4xl tracking-tight font-semibold mb-4">{item.title}</h3>
                  <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="text-xs tracking-[4px] text-accent mb-4">READY TO EXPERIENCE MORE?</div>
        <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6">
          Grok can build<br />your next interface.<br />Today.
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-md mx-auto">
          This landing proves that Grok doesn't just generate code — it delivers production-grade, beautiful, interactive experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base">
            <a href="https://github.com/tukhlievs/grok-landing" target="_blank">
              Star the Repository <Github className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-base">
            <a href="#demo">
              Try the Interactive Demo Again
            </a>
          </Button>
        </div>

        <div className="mt-16 text-xs text-zinc-500">
          Deployed via GitHub Pages • Static Next.js export • 100% crafted by Grok
        </div>
      </section>

      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 gap-y-4">
          <div>© {new Date().getFullYear()} Grok Landing — Created by Grok for tukhlievs</div>
          <div className="flex gap-6">
            <a href="https://x.ai" target="_blank" className="hover:text-white transition-colors">xAI</a>
            <a href="https://github.com/tukhlievs/grok-landing" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
