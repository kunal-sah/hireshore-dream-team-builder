Update minimatch to patched versions to resolve CVE-2026-27904 (High severity ReDoS).

Current vulnerable versions in lockfile:
- minimatch 3.1.2 (affected ≤3.1.3, patched in 3.1.4+)
- minimatch 9.0.5 (affected <9.0.7, patched in 9.0.7+)

Steps:
1. Add npm `overrides` to package.json forcing minimatch >=3.1.4 and >=9.0.7
2. Run `bun install` to regenerate bun.lockb with safe versions
3. Verify `bun pm ls minimatch` shows only patched versions
4. Run `bun run build` to confirm no build breakage

No application code changes. Only package.json and lockfile updates.