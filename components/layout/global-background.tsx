"use client"

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1]">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background dark:from-background dark:via-background dark:to-background">
        
        {/* Very subtle accent areas for depth */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/[0.01] to-transparent dark:from-primary/[0.015]" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/[0.01] to-transparent dark:from-primary/[0.015]" />
        
      </div>
    </div>
  )
}