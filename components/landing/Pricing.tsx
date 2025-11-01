"use client";

import React from "react";
import { Check } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline";
  isPopular?: boolean;
  features: PricingFeature[];
}

interface PricingTableProps {
  tiers?: PricingTier[];
  darkMode?: boolean;
}

const defaultTiers: PricingTier[] = [
  {
    id: "early-bird",
    name: "Early Bird",
    price: 0,
    period: "launch",
    description: "Exclusive access for our first users with special benefits",
    buttonText: "Join Waitlist",
    buttonVariant: "outline",
    isPopular: true,
    features: [
      { name: "Early access to beta features", included: true },
      { name: "Priority support", included: true },
      { name: "Exclusive onboarding", included: true },
      { name: "Influence product roadmap", included: true },
      { name: "Special founding member badge", included: true },
    ],
  },
  {
    id: "founders-club",
    name: "Founders Club",
    price: 0,
    period: "launch",
    description: "For visionaries who want to shape the future of AI",
    buttonText: "Apply Now",
    buttonVariant: "primary",
    features: [
      { name: "All Early Bird benefits", included: true },
      { name: "Direct line to our engineering team", included: true },
      { name: "Quarterly strategy calls", included: true },
      { name: "Early feature previews", included: true },
      { name: "Founding member certificate", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 0,
    period: "custom",
    description: "Custom AI solutions for your business needs",
    buttonText: "Contact Sales",
    buttonVariant: "secondary",
    features: [
      { name: "Custom AI model training", included: true },
      { name: "Dedicated support team", included: true },
      { name: "SLA & enterprise security", included: true },
      { name: "Custom integrations", included: true },
      { name: "Tailored pricing", included: true },
    ],
  },
];

const PricingTable: React.FC<PricingTableProps> = ({
  tiers = defaultTiers,
}) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="  text-gray-900 dark:bg-gray-900 dark:text-white ">
      <div className="max-w-[1366px] w-full px-4 md:px-6 lg:px-15 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center">Be Among the First</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Join our exclusive launch program and help shape the future of AI. Pricing will be announced soon.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 relative">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-gray-50 border   border-gray-200 rounded-4xl p-4 relative transition-all duration-300  overflow-visible dark:bg-gray-800 dark:border-gray-700"
            >
              {tier.isPopular && (
                <div className="absolute top-8 right-8">
                  <button className="bg-[#212121] text-white py-1 px-3 rounded-full  text-xs border border-gray-200 font-">
                    Most Popular
                  </button>
                </div>
              )}
              {/* Header */}
              <div className="bg-white shadow-sm outline outline-black/5  rounded-4xl p-6 dark:bg-gray-800 flex flex-col ">
                <div className="text-left mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {tier.price === 0 ? 'Free' : 'Custom'}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {tier.price === 0 ? ' at launch' : ' pricing'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tier.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <PrimaryButton
                    variant="navbar"
                    onClick={console.log}
                    name={tier.buttonText}
                  />
                </div>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-gray-500 dark:text-gray-400 px-4">
                  Features
                </h4>
                <ul className="space-y-3 px-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          feature.included
                            ? "text-green-500"
                            : "text-gray-400 dark:text-gray-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          feature.included
                            ? ""
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
