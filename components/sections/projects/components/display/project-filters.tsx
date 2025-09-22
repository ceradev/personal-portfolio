"use client";

import { Search, SortAsc, Filter, FolderOpen, Monitor, Server, Layers, Brain, Code } from "lucide-react";
import { Input } from "@/components/ui/form/input";
import { Button } from "@/components/ui/display/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/navigation/dropdown-menu";

interface ProjectFiltersProps {
  readonly searchQuery: string;
  readonly setSearchQuery: (query: string) => void;
  readonly activeFilter: string;
  readonly setActiveFilter: (filter: string) => void;
  readonly sortBy: "date" | "name" | "featured";
  readonly setSortBy: (sort: "date" | "name" | "featured") => void;
  readonly totalProjects: number;
  readonly filteredCount: number;
}

export function ProjectFilters({
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
  sortBy,
  setSortBy,
  totalProjects,
  filteredCount,
}: ProjectFiltersProps) {
  // Filter categories
  const filterCategories = [
    "all",
    "Frontend",
    "Backend",
    "Full Stack",
    "IA",
    "Freelance",
  ];

  // Renderizar el icono de categoría
  const renderCategoryIcon = (category: string) => {
    if (category === "all") return <FolderOpen className="h-4 w-4" />;
    if (category === "Frontend") return <Monitor className="h-4 w-4" />;
    if (category === "Backend") return <Server className="h-4 w-4" />;
    if (category === "Full Stack") return <Layers className="h-4 w-4" />;
    if (category === "IA") return <Brain className="h-4 w-4" />;
    if (category === "Freelance") return <Code className="h-4 w-4" />;
    return <Code className="h-4 w-4" />;
  };

  const getCategoryLabel = (category: string) => {
    if (category === "all") return "Todas las categorías";
    return category;
  };

  return (
    <div className="space-y-6">
      {/* Filters Row */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Left side - Category and Sort dropdowns */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Category Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 min-w-[180px] justify-start"
              >
                {renderCategoryIcon(activeFilter)}
                <span className="ml-2 truncate">
                  {getCategoryLabel(activeFilter)}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>Categoría</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {filterCategories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={activeFilter === category ? "bg-accent" : ""}
                >
                  {renderCategoryIcon(category)}
                  <span className="ml-2">
                    {category === "all" ? "Todas las categorías" : category}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 min-w-[140px] justify-start"
              >
                <SortAsc className="h-4 w-4" />
                <span className="ml-2">
                  {(() => {
                    if (sortBy === "date") return "Más recientes";
                    if (sortBy === "featured") return "Destacados";
                    return "Alfabético";
                  })()}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setSortBy("date")}
                className={sortBy === "date" ? "bg-accent" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                Más recientes
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSortBy("featured")}
                className={sortBy === "featured" ? "bg-accent" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                Destacados
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSortBy("name")}
                className={sortBy === "name" ? "bg-accent" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                Alfabético
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right side - Search Input */}
        <div className="relative group w-full lg:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50 group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Buscar proyectos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full sm:w-64 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-2 border-primary/20 focus:border-primary/50 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
          />
        </div>
      </div>

      {/* Results Counter */}
      <div className="text-sm text-foreground/60">
        {filteredCount === totalProjects
          ? `Mostrando todos los ${totalProjects} proyectos`
          : `Mostrando ${filteredCount} de ${totalProjects} proyectos`}
        {activeFilter !== "all" && (
          <span className="ml-1">
            en{" "}
            <span className="text-primary font-medium">{activeFilter}</span>
          </span>
        )}
        {searchQuery && (
          <span className="ml-1">
            {" "}para "
            <span className="text-primary font-medium">{searchQuery}</span>"
          </span>
        )}
      </div>
    </div>
  );
}
