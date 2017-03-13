function main() {
    var squareSize = parseInt(readLine());
    var grid = [];

    for (var grid_i = 0; grid_i < squareSize; grid_i++) {
        //get all the lines and assign to array
        grid[grid_i] = readLine();

    }

    drawNewSquare(grid, squareSize);

}

function drawNewSquare(grid, squareSize) {
    var new_grid = [];
    var result = '';
    var final = '';
    //start looking into the entire array
    for (var grid_i = 0; grid_i < squareSize; grid_i++) {
        new_grid[grid_i] = grid[grid_i];
        for (var i = 0; i < grid[grid_i].length; i++) {
            //no borders
            if ((grid_i !== 0 && grid_i !== squareSize - 1) && (i !== 0 && i !== grid[grid_i].length - 1)) {
                if (grid[grid_i][i] > grid[grid_i][i + 1] &&
                    grid[grid_i][i] > grid[grid_i][i - 1] &&
                    grid[grid_i][i] > grid[grid_i + 1][i] &&
                    grid[grid_i][i] > grid[grid_i - 1][i]) {

                    result += 'X';

                } else {
                    result += grid[grid_i][i];
                }

            } else {
                result += grid[grid_i][i];
            }
        }

        console.log(result);
        result = '';
    }
}