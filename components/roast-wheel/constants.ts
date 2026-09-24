/**
 * Posisi kuadran (indeks = urutan roastLevels):
 *   0 kiri-atas  | 1 kanan-atas
 *   3 kiri-bawah | 2 kanan-bawah
 */
export const TEMPS = ["± 205°C", "± 215°C", "± 225°C", "± 235°C"]; // TODO: sesuaikan profil sangrai klien
export const CELL_ORDER = [0, 1, 3, 2]; // urutan sel grid 2×2 → indeks tingkat sangrai
export const CORNER = ["rounded-tl-full", "rounded-tr-full", "rounded-bl-full", "rounded-br-full"]; // per sel grid
export const INNER = ["rf-tl", "rf-tr", "rf-bl", "rf-br"]; // per sel grid
export const angleOf = (i: number) => -135 + 90 * i; // sudut pusat kuadran, 0° = kanan
export const indexAt = (deg: number) => Math.floor((((deg + 180) % 360) + 360) % 360 / 90);
