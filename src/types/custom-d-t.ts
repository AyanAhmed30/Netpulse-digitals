// types/custom-d-t.ts
export interface IdProps {
  id: string; // Change from number to string to handle both id and slug
}

export interface PageParamsProps {
  params: Promise<{ id?: string; slug?: string }>; // Add slug parameter
}