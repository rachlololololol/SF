import { Recommendation } from "@/data/recommendations";
import { MapPin } from "@/components/illustrations";

export function RecommendationCard({ rec }: { rec: Recommendation }) {
  return (
    <div className="bg-cream-light rounded-2xl p-6 border border-brown-dark/8 hover:shadow-lg hover:shadow-terracotta/5 transition-all group">
      <span className="category-tag text-navy bg-navy/8 px-2 py-1 rounded">
        {rec.category}
      </span>
      <h3 className="font-serif text-xl font-bold text-brown-dark mt-3 mb-2 group-hover:text-terracotta transition-colors">
        {rec.name}
      </h3>
      <p className="text-sm text-brown-medium/70 leading-relaxed mb-4">
        {rec.blurb}
      </p>
      <a
        href={rec.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:text-terracotta-bright transition-colors"
      >
        <MapPin className="w-4 h-4" />
        View on Google Maps
      </a>
    </div>
  );
}
