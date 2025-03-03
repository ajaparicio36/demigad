// app/page.js
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="min-h-screen bg-background items-center justify-center flex flex-col w-full">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 items-center justify-center flex">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-xl font-bold">DemiGAD</span>
            </Link>
          </div>
          <NavigationMenu className="hidden md:flex ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#team" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Team
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button className="bg-blue-400">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50 w-full items-center justify-center flex">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-400 px-3 py-1 text-sm">
                Innovative Software Solutions
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transforming Ideas Into Digital Reality
              </h1>
              <p className="max-w-[600px] text-slate-700 md:text-xl">
                At DemiGAD, we create cutting-edge software solutions tailored
                to meet the evolving needs of businesses and communities.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Explore Our Work</Button>
                <Button className="bg-blue-400" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <AspectRatio
                ratio={16 / 9}
                className="overflow-hidden rounded-lg"
              >
                <div className="h-full w-full bg-slate-200 flex object-cover items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="DemiGAD"
                    width={1000}
                    height={1000}
                  />
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 md:py-24 w-full items-center justify-center flex"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-400 px-3 py-1 text-sm">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                We Are DemiGAD
              </h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We specialize in creating innovative software solutions that
                help businesses and communities thrive in the digital age.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Security First</h3>
              </div>
              <p className="text-slate-700">
                We prioritize the security and privacy of our clients' data.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2v4" />
                    <path d="m16.24 7.76-2.12 2.12" />
                    <path d="M21 12h-4" />
                    <path d="m16.24 16.24-2.12-2.12" />
                    <path d="M12 21v-4" />
                    <path d="m7.76 16.24 2.12-2.12" />
                    <path d="M3 12h4" />
                    <path d="m7.76 7.76 2.12 2.12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Innovative Solutions</h3>
              </div>
              <p className="text-slate-700">
                We constantly explore new technologies to deliver cutting-edge
                solutions.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Client-Focused</h3>
              </div>
              <p className="text-slate-700">
                We work closely with our clients to understand and meet their
                specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-24 bg-slate-50 w-full items-center justify-center flex"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">
                Our Work
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've developed innovative solutions across various domains.
                Here's a showcase of our recent projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <div className="h-full w-full object-cover bg-slate-200 flex items-center justify-center">
                  <Image
                    src="/projects/baylocentral.png"
                    alt="BayloCentral"
                    width={720}
                    height={720}
                  />
                </div>
              </AspectRatio>
              <CardHeader>
                <CardTitle>BayloCentral</CardTitle>
                <CardDescription>
                  A web application to streamline the buying of agricultural
                  resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">
                  BayloCentral connects farmers with suppliers, optimizing the
                  agricultural supply chain and making resources more
                  accessible.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-1">
                <Badge variant="secondary">Agriculture</Badge>
                <Badge variant="secondary">E-commerce</Badge>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <div className="h-full w-full bg-slate-200 flex object-cover items-center justify-center">
                  <Image
                    src="/projects/baylocentral.png"
                    alt="BayloCentral"
                    width={720}
                    height={720}
                  />
                </div>
              </AspectRatio>
              <CardHeader>
                <CardTitle>Procurio</CardTitle>
                <CardDescription>
                  A web application to match clients with freelancers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">
                  Procurio connects clients with freelancers and services from
                  students and professionals alike, creating opportunities for
                  all.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-1">
                <Badge variant="secondary">Freelancing</Badge>
                <Badge variant="secondary">Marketplace</Badge>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <div className="h-full w-full object-cover bg-slate-200 flex items-center justify-center">
                  <Image
                    src="/projects/baylocentral.png"
                    alt="BayloCentral"
                    width={720}
                    height={720}
                  />
                </div>
              </AspectRatio>
              <CardHeader>
                <CardTitle>MediVendo</CardTitle>
                <CardDescription>
                  A vending machine for over-the-counter medicine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">
                  MediVendo speeds up the process of obtaining common
                  medications and ensures their availability through innovative
                  vending machines.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-1">
                <Badge variant="secondary">Healthcare</Badge>
                <Badge variant="secondary">IoT</Badge>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <div className="h-full w-full object-cover bg-slate-200 flex items-center justify-center">
                  <Image
                    src="/projects/baylocentral.png"
                    alt="BayloCentral"
                    width={720}
                    height={720}
                  />
                </div>
              </AspectRatio>
              <CardHeader>
                <CardTitle>ParkMate</CardTitle>
                <CardDescription>A map-based parking system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">
                  ParkMate helps users find available parking spots in
                  real-time, reducing congestion and saving time in urban
                  environments.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-1">
                <Badge variant="secondary">Smart City</Badge>
                <Badge variant="secondary">Mapping</Badge>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button size="lg">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-16 md:py-24 w-full justify-center items-center w-full items-center justify-center flex"
      >
        <div className="container px-4 md:px-6 items-center w-full justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-400 px-3 py-1 text-sm">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet The Team
              </h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our talented team of developers, designers, and strategists work
                together to create innovative solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12 w-full">
            <ScrollArea className="w-full whitespace-nowrap w-full">
              <div className="flex gap-6 pb-4">
                <Card className="overflow-hidden min-w-[250px]">
                  <AspectRatio ratio={1 / 1}>
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>Jeff Andre Millan</CardTitle>
                    <CardDescription>Founder & CEO</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">
                      Tech visionary with 15+ years experience in software
                      development and leadership.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden min-w-[250px]">
                  <AspectRatio ratio={1 / 1}>
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>Matthew Ledesma</CardTitle>
                    <CardDescription>COO</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">
                      Creative designer focused on building intuitive and
                      accessible user experiences.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden min-w-[250px]">
                  <AspectRatio ratio={1 / 1}>
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>Michael Valguna</CardTitle>
                    <CardDescription>Marketing Manager</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">
                      Creative designer focused on building intuitive and
                      accessible user experiences.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden min-w-[250px]">
                  <AspectRatio ratio={1 / 1}>
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>Anthony John Aparicio</CardTitle>
                    <CardDescription>CTO and Lead Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">
                      Creative designer focused on building intuitive and
                      accessible user experiences.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden min-w-[250px]">
                  <AspectRatio ratio={1 / 1}>
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>Mark Renzo Tan</CardTitle>
                    <CardDescription>CFO</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">
                      Experienced project manager ensuring on-time delivery and
                      client satisfaction.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden min-w-[250px]">
                  <AspectRatio ratio={1 / 1}>
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>Zyd Reic Mallorca</CardTitle>
                    <CardDescription>Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">
                      Experienced project manager ensuring on-time delivery and
                      client satisfaction.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden min-w-[250px]">
                  <AspectRatio ratio={1 / 1}>
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>Jezerwel Grino</CardTitle>
                    <CardDescription>Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">
                      Experienced project manager ensuring on-time delivery and
                      client satisfaction.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden min-w-[250px]">
                  <AspectRatio ratio={1 / 1}>
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>Chad Denard Andrada</CardTitle>
                    <CardDescription>Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">
                      Experienced project manager ensuring on-time delivery and
                      client satisfaction.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden min-w-[250px]">
                  <AspectRatio ratio={1 / 1}>
                    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>Lois Kirsten Alonsagay</CardTitle>
                    <CardDescription>Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">
                      Experienced project manager ensuring on-time delivery and
                      client satisfaction.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-slate-50 w-full items-center justify-center flex"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-400 px-3 py-1 text-sm">
                Get In Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind? We'd love to hear from you. Let's
                discuss how we can help.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button>Send Message</Button>
                </form>
              </CardContent>
            </Card>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-sm font-medium">Address</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      Jaro, Iloilo City, Philippines
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="text-sm font-medium">Phone</span>
                    </div>
                    <p className="text-sm text-slate-700">+1 (234) 567-8910</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span className="text-sm font-medium">Email</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      demigad.cpu@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Monday - Friday</span>
                    <span className="text-sm font-medium">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Saturday</span>
                    <span className="text-sm font-medium">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sunday</span>
                    <span className="text-sm font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background w-full items-center justify-center flex">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="flex flex-col gap-2">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold">DemiGAD</span>
              </Link>
              <p className="text-sm text-slate-700">
                Creating innovative software solutions that help businesses and
                communities thrive in the digital age.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:col-span-2">
              <div className="grid gap-2">
                <h3 className="text-sm font-medium">Quick Links</h3>
                <nav className="grid gap-2">
                  <Link href="#about" className="text-sm hover:underline">
                    About
                  </Link>
                  <Link href="#projects" className="text-sm hover:underline">
                    Projects
                  </Link>
                  <Link href="#team" className="text-sm hover:underline">
                    Team
                  </Link>
                  <Link href="#contact" className="text-sm hover:underline">
                    Contact
                  </Link>
                </nav>
              </div>
              <div className="grid gap-2">
                <h3 className="text-sm font-medium">Follow Us</h3>
                <nav className="flex gap-4">
                  <Link
                    href="#"
                    className="text-slate-700 hover:text-slate-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-700 hover:text-slate-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-700 hover:text-slate-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-700 hover:text-slate-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 w-full items-center justify-center flex">
            <p className="text-center text-sm text-slate-700">
              © 2025 DemiGAD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
