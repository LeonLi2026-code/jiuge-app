import { useState } from "react";
import { Search, Bell, Home, BookOpen, Users, User, Star, Clock, MapPin, Heart, Bookmark, Plus } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="size-full bg-[#1a1a1a] text-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <header className="px-4 py-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">酒格</h1>
            <span className="text-sm text-gray-400">leonlidemo</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 transition-all">
              <Plus className="w-4 h-4" />
              <span>发布</span>
            </button>
            <button className="relative p-2 hover:bg-white/5 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-amber-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索饮品、配方、调酒师..."
            className="w-full bg-[#2a2a2a] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        {activeTab === "home" && <FeedView />}
        {activeTab === "recipes" && <RecipesView />}
        {activeTab === "bartenders" && <BartendersView />}
        {activeTab === "profile" && <ProfileView />}
      </main>

      {/* Bottom Tab Navigation */}
      <nav className="border-t border-white/10 bg-[#1a1a1a] px-2 py-2 safe-area-inset-bottom">
        <div className="flex items-center justify-around">
          <TabButton
            icon={<Home className="w-5 h-5" />}
            label="首页"
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          />
          <TabButton
            icon={<BookOpen className="w-5 h-5" />}
            label="配方"
            active={activeTab === "recipes"}
            onClick={() => setActiveTab("recipes")}
          />
          <TabButton
            icon={<Users className="w-5 h-5" />}
            label="调酒师"
            active={activeTab === "bartenders"}
            onClick={() => setActiveTab("bartenders")}
          />
          <TabButton
            icon={<User className="w-5 h-5" />}
            label="我的"
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />
        </div>
      </nav>
    </div>
  );
}

function TabButton({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors"
    >
      <div className={active ? "text-amber-400" : "text-gray-400"}>
        {icon}
      </div>
      <span className={`text-xs ${active ? "text-amber-400 font-medium" : "text-gray-400"}`}>
        {label}
      </span>
    </button>
  );
}

function FeedView() {
  const feedItems = [
    {
      id: 1,
      user: "Sarah Chen",
      userAvatar: "https://images.unsplash.com/photo-1754925434420-ac1c855e8ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      drink: "浓缩咖啡马天尼",
      drinkImage: "https://images.unsplash.com/photo-1772311698901-fe3fa07141be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 5,
      review: "苦甜平衡绝对完美。The Velvet Room的调酒师做得太棒了！",
      time: "2小时前"
    },
    {
      id: 2,
      user: "Marcus Johnson",
      userAvatar: "https://images.unsplash.com/photo-1707814215070-52b61604cb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      drink: "经典莫吉托",
      drinkImage: "https://images.unsplash.com/photo-1778104959835-3ca0791641a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4,
      review: "新鲜薄荷让一切都不同。很棒的夏日饮品！",
      time: "5小时前"
    },
    {
      id: 3,
      user: "Emma Rodriguez",
      userAvatar: "https://images.unsplash.com/photo-1539020726645-cd4f3ed76142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      drink: "热带天堂",
      drinkImage: "https://images.unsplash.com/photo-1778104959770-aefef86b0e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 5,
      review: "喜欢这个分层展示和热带风味。非常适合发Instagram！",
      time: "1天前"
    }
  ];

  return (
    <div className="pb-4">
      <div className="px-4 py-3">
        <h2 className="text-lg font-semibold">最新评价</h2>
        <p className="text-sm text-gray-400">看看社区在喝什么</p>
      </div>

      <div className="space-y-4">
        {feedItems.map((item) => (
          <div key={item.id} className="bg-[#242424] rounded-2xl overflow-hidden mx-4 border border-white/5">
            {/* User Info */}
            <div className="flex items-center gap-3 p-4 pb-3">
              <ImageWithFallback
                src={item.userAvatar}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover border border-white/10"
              />
              <div className="flex-1">
                <p className="font-medium text-sm">{item.user}</p>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>

            {/* Drink Image */}
            <ImageWithFallback
              src={item.drinkImage}
              alt={item.drink}
              className="w-full h-72 object-cover"
            />

            {/* Drink Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg">{item.drink}</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating ? "fill-amber-400 text-amber-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{item.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecipesView() {
  const recipes = [
    {
      id: 1,
      name: "浓缩咖啡马天尼",
      image: "https://images.unsplash.com/photo-1772311698901-fe3fa07141be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      difficulty: "中等",
      time: "5分钟",
      ingredients: 4
    },
    {
      id: 2,
      name: "经典莫吉托",
      image: "https://images.unsplash.com/photo-1778104959835-3ca0791641a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      difficulty: "简单",
      time: "3分钟",
      ingredients: 5
    },
    {
      id: 3,
      name: "古典鸡尾酒",
      image: "https://images.unsplash.com/photo-1676475061527-38552ed8b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      difficulty: "简单",
      time: "4分钟",
      ingredients: 4
    },
    {
      id: 4,
      name: "热带天堂",
      image: "https://images.unsplash.com/photo-1778104959770-aefef86b0e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      difficulty: "困难",
      time: "8分钟",
      ingredients: 7
    },
    {
      id: 5,
      name: "内格罗尼",
      image: "https://images.unsplash.com/photo-1650691960684-c15e3e2d5c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      difficulty: "简单",
      time: "2分钟",
      ingredients: 3
    },
    {
      id: 6,
      name: "玛格丽特",
      image: "https://images.unsplash.com/photo-1613577813903-e9e9bc994cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      difficulty: "中等",
      time: "5分钟",
      ingredients: 5
    }
  ];

  return (
    <div className="p-4 pb-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">饮品教程</h2>
        <p className="text-sm text-gray-400">掌握调酒艺术</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-[#242424] rounded-xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all">
            <ImageWithFallback
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm mb-2 line-clamp-1">{recipe.name}</h3>

              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-0.5 rounded-full ${
                    recipe.difficulty === "简单" ? "bg-green-500/20 text-green-400" :
                    recipe.difficulty === "中等" ? "bg-amber-500/20 text-amber-400" :
                    "bg-red-500/20 text-red-400"
                  }`}>
                    {recipe.difficulty}
                  </span>
                  <span className="text-gray-400">{recipe.ingredients}种材料</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium py-2 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all">
                查看配方
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BartendersView() {
  const bartenders = [
    {
      id: 1,
      name: "Alex Rivera",
      image: "https://images.unsplash.com/photo-1707814215070-52b61604cb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bar: "天鹅绒酒廊",
      location: "纽约",
      specialty: "经典鸡尾酒",
      followers: 2847,
      isFollowing: false
    },
    {
      id: 2,
      name: "Jordan Kim",
      image: "https://images.unsplash.com/photo-1539020726645-cd4f3ed76142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bar: "霓虹之夜",
      location: "洛杉矶",
      specialty: "分子调酒",
      followers: 4521,
      isFollowing: true
    },
    {
      id: 3,
      name: "Sofia Martinez",
      image: "https://images.unsplash.com/photo-1754925434420-ac1c855e8ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bar: "橡木与藤蔓",
      location: "奥斯汀",
      specialty: "精酿鸡尾酒",
      followers: 3192,
      isFollowing: false
    },
    {
      id: 4,
      name: "David Chen",
      image: "https://images.unsplash.com/photo-1632352926884-df7d4703b8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bar: "屋顶酒廊",
      location: "迈阿密",
      specialty: "热带饮品",
      followers: 5638,
      isFollowing: true
    }
  ];

  return (
    <div className="p-4 pb-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">精选调酒师</h2>
        <p className="text-sm text-gray-400">发现吧台背后的人才</p>
      </div>

      <div className="space-y-3">
        {bartenders.map((bartender) => (
          <div key={bartender.id} className="bg-[#242424] rounded-xl p-4 border border-white/5 hover:border-amber-500/30 transition-all">
            <div className="flex items-start gap-4">
              <ImageWithFallback
                src={bartender.image}
                alt={bartender.name}
                className="w-20 h-20 rounded-xl object-cover border border-white/10"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-base">{bartender.name}</h3>
                    <p className="text-xs text-amber-400 font-medium">{bartender.specialty}</p>
                  </div>
                  <button className="p-1.5 hover:bg-white/5 rounded-lg transition-colors">
                    <Bookmark className={`w-5 h-5 ${bartender.isFollowing ? "fill-amber-400 text-amber-400" : "text-gray-400"}`} />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="truncate">{bartender.bar} • {bartender.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">{bartender.followers.toLocaleString()}位粉丝</span>
                  <button className={`ml-auto px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    bartender.isFollowing
                      ? "bg-white/10 text-white hover:bg-white/15"
                      : "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                  }`}>
                    {bartender.isFollowing ? "已关注" : "关注"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileView() {
  return (
    <div className="p-4">
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-xl font-semibold mb-2">我的资料</h2>
        <p className="text-sm text-gray-400 mb-6">登录以保存您喜爱的饮品和调酒师</p>
        <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-2.5 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all">
          登录
        </button>
      </div>
    </div>
  );
}
