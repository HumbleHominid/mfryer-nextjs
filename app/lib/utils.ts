export default function IsDarkMode() {
	return (typeof window !== undefined && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)'));
}