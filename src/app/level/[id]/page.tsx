import { notFound } from "next/navigation";
import { PuzzleScreen } from "@/components/puzzle/PuzzleScreen";
import { getLevel, LEVELS } from "@/lib/levels";

export function generateStaticParams() {
  return LEVELS.map((level) => ({ id: level.id }));
}

export default async function LevelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const level = getLevel(id);
  if (!level) notFound();
  return <PuzzleScreen key={level.id} level={level} />;
}
