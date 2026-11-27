export const savedDoctorsKey = 'doclist-saved-doctors-v1';
export const savedDoctorsEvent = 'doclist-saved-doctors-change';
export const retentionMs = 365 * 24 * 60 * 60 * 1000;
export type SavedDoctor = {id: string; expiresAt: number};
export function parseSavedDoctors(raw: string | null, now = Date.now()): SavedDoctor[] {
  try {
    const data: unknown = JSON.parse(raw || '[]');
    if (!Array.isArray(data)) return [];
    const unique = new Map<string, SavedDoctor>();
    for (const item of data) {
      if (item && typeof item.id === 'string' && item.id.length > 0 && item.id.length < 200 &&
          Number.isFinite(item.expiresAt) && item.expiresAt > now) {
        unique.set(item.id, {id: item.id, expiresAt: item.expiresAt});
      }
    }
    return [...unique.values()];
  } catch { return []; }
}
export function readSavedDoctors() { return parseSavedDoctors(localStorage.getItem(savedDoctorsKey)); }
export function writeSavedDoctors(items: SavedDoctor[]) {
  localStorage.setItem(savedDoctorsKey, JSON.stringify(items));
  window.dispatchEvent(new Event(savedDoctorsEvent));
}
