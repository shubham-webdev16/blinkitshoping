interface CategoryBarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryBar = ({ categories, selected, onSelect }: CategoryBarProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-2">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selected === cat
                ? "gradient-brand text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
