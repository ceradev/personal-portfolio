export interface Experience {
  readonly id: string
  readonly title: string
  readonly company: string
  readonly location: string
  readonly period: string
  readonly description: string
  readonly achievements: string[]
  readonly skills: string[]
  readonly url?: string
  readonly status: "completed" | "current"
  readonly logo: string
}

export interface TimelineNodeProps {
  readonly experience: Experience
  readonly index: number
  readonly isActive: boolean
  readonly onClick: () => void
}

export interface ExperienceDetailsProps {
  readonly experience: Experience
}
