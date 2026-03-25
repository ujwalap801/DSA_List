   const MOD = 12345;
    const n = grid.length;
    const m = grid[0].length;

    // Initialize result matrix
    const p = Array.from({ length: n }, () => Array(m).fill(0));

    let suffix = 1;

    // Traverse from bottom-right to top-left
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            p[i][j] = suffix;
            suffix = (suffix * grid[i][j]) % MOD;
        }
    }

    let prefix = 1;

    // Traverse from top-left to bottom-right
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            p[i][j] = (prefix * p[i][j]) % MOD;
            prefix = (prefix * grid[i][j]) % MOD;
        }
    }

    return p;