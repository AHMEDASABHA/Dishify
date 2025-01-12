import Image from "next/image";
import { ChefHat, Search, Heart, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import personal from "@assets/images/personal.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Our Recipe App
          </h1>
          <p className="mt-5 text-xl text-gray-600 dark:text-gray-300">
            Discover, cook, and savor with our feature-rich recipe application
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <FeatureCard
              icon={
                <Search className="h-8 w-8 text-orange-500 dark:text-orange-400" />
              }
              title="Advanced Search"
              description="Find recipes by name, ingredients, or categories with our powerful search feature."
            />
            <FeatureCard
              icon={
                <Eye className="h-8 w-8 text-orange-500 dark:text-orange-400" />
              }
              title="Detailed View"
              description="Get comprehensive information about each recipe with our 'View Details' option."
            />
            <FeatureCard
              icon={
                <Heart className="h-8 w-8 text-orange-500 dark:text-orange-400" />
              }
              title="Favorites"
              description="Save your beloved recipes and access them quickly with our favorites feature."
            />
            <FeatureCard
              icon={
                <ChefHat className="h-8 w-8 text-orange-500 dark:text-orange-400" />
              }
              title="Browse Recipes"
              description="Explore a vast collection of delicious recipes from various cuisines."
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="overflow-hidden rounded-lg bg-card shadow-xl transition-colors duration-300">
            <div className="sm:flex">
              <div className="sm:flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover sm:h-full sm:w-48"
                  src={personal}
                  alt="Ahmed Abu Sabha"
                  width={192}
                  height={192}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Meet the Developer
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Ahmed Abu Sabha is a passionate Next.js developer who created
                  this recipe app to make cooking more accessible and enjoyable
                  for everyone. With a keen eye for design and a love for good
                  food, Ahmed has crafted an intuitive and feature-rich
                  application that brings the joy of cooking to your fingertips.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-600 dark:text-gray-300">
            Start exploring recipes today and elevate your culinary experience!
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="flex items-start space-x-4 p-6">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </Card>
  );
}
