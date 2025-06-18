import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Ignore shadcn UI components
    ignores: [
      "src/components/ui/**",
      "components/ui/**",
      "lib/utils.ts"
    ]
  },
  {
    // Tambahkan objek konfigurasi baru untuk aturan kustom
    rules: {

      // Opsi alternatif (kurang disarankan): Ubah jadi peringatan saja
      // "@typescript-eslint/no-unused-vars": "warn",

      // 2. Mengizinkan Tipe 'any' (Unexpected any)
      // Opsi disarankan: Ubah jadi peringatan, agar Anda tetap tahu ada 'any'
      // "@typescript-eslint/no-explicit-any": "warn",
      // Opsi alternatif (Sangat Tidak Disarankan): Matikan sepenuhnya
      "@typescript-eslint/no-explicit-any": "off",

      // 3. Mengabaikan Dependensi Hook (React Hook useEffect has a missing dependency)
      // Opsi disarankan: Pertimbangkan untuk TIDAK menonaktifkan ini, karena ini penting
      // untuk mencegah bug. Jika Anda tetap ingin menonaktifkan:
      "react-hooks/exhaustive-deps": "off", // Matikan sepenuhnya
    },
  },
];

export default eslintConfig;
