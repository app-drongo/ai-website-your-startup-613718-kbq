'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Clock, Headphones } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState, useEffect } from 'react';

const DEFAULT_HERO = {
  headline: 'Transform Your Business with Next-Gen Technology',
  subheadline:
    'Streamline operations, boost productivity, and scale faster with our innovative platform designed for modern enterprises.',
  description:
    'Join thousands of companies already leveraging our cutting-edge solutions to drive growth and stay ahead of the competition.',
  ctaText: 'Get Started Today',
  ctaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  keyBenefits: [
    {
      icon: 'Shield',
      title: 'Enterprise-grade security',
      description: 'Bank-level encryption and compliance',
    },
    {
      icon: 'Clock',
      title: '99.9% uptime guarantee',
      description: 'Reliable infrastructure you can trust',
    },
    {
      icon: 'Headphones',
      title: '24/7 expert support',
      description: 'Get help whenever you need it',
    },
  ],
  trustBadge: 'Trusted by 10,000+ companies worldwide',
  backgroundPattern: true,
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="h-6 w-6" />;
      case 'Clock':
        return <Clock className="h-6 w-6" />;
      case 'Headphones':
        return <Headphones className="h-6 w-6" />;
      default:
        return <Shield className="h-6 w-6" />;
    }
  };

  return (
    <section id="hero" className="relative bg-background text-foreground overflow-hidden">
      {/* Background Pattern */}
      {config.backgroundPattern && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      )}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div
            className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Badge variant="secondary" className="bg-muted text-muted-foreground px-4 py-2">
              <span data-editable="trustBadge">{config.trustBadge}</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <div
            className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              <span data-editable="headline">{config.headline}</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div
            className={`mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span data-editable="subheadline">{config.subheadline}</span>
            </p>
          </div>

          {/* Description */}
          <div
            className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div
            className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {config.keyBenefits.map((benefit, idx) => (
                <Card
                  key={idx}
                  className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-colors duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {getIcon(benefit.icon)}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">
                      <span data-editable={`keyBenefits[${idx}].title`}>{benefit.title}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <span data-editable={`keyBenefits[${idx}].description`}>
                        {benefit.description}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
