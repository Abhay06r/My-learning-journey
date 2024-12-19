#include <SDL2/SDL.h>
#include <stdio.h>
#include <stdlib.h> 
#include <time.h>

#define WIDTH 600
#define HEIGHT 400
#define SNAKE_BLOCK 10
#define SNAKE_SPEED 100

typedef struct {
    int x;
    int y;
} SnakeSegment;

int main() {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window *window = SDL_CreateWindow("Snake Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, WIDTH, HEIGHT, 0);
    SDL_Renderer *renderer = SDL_CreateRenderer(window, -1, 0);

    int gameOver = 0;
    int gameClose = 0;
    int x1 = WIDTH / 2;
    int y1 = HEIGHT / 2;
    int x1_change = 0;
    int y1_change = 0;
    int length_of_snake = 1;
    SnakeSegment snake[100];
    int foodx, foody;

    srand(time(NULL));
    foodx = (rand() % (WIDTH / SNAKE_BLOCK)) * SNAKE_BLOCK;
    foody = (rand() % (HEIGHT / SNAKE_BLOCK)) * SNAKE_BLOCK;

    while (!gameOver) {
        while (gameClose) {
            SDL_SetRenderDrawColor(renderer, 50, 153, 213, 255);
            SDL_RenderClear(renderer);
            // Display message here
            // Reset game here if needed
            SDL_RenderPresent(renderer);
            SDL_Delay(2000); // Wait for 2 seconds
            gameClose = 0;
        }

        SDL_Event event;
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) {
                gameOver = 1;
            }
            if (event.type == SDL_KEYDOWN) {
                switch (event.key.keysym.sym) {
                    case SDLK_LEFT:
                        if (x1_change == 0) {
                            x1_change = -SNAKE_BLOCK;
                            y1_change = 0;
                        }
                        break;
                    case SDLK_RIGHT:
                        if (x1_change == 0) {
                            x1_change = SNAKE_BLOCK;
                            y1_change = 0;
                        }
                        break;
                    case SDLK_UP:
                        if (y1_change == 0) {
                            y1_change = -SNAKE_BLOCK;
                            x1_change = 0;
                        }
                        break;
                    case SDLK_DOWN:
                        if (y1_change == 0) {
                            y1_change = SNAKE_BLOCK;
                            x1_change = 0;
                        }
                        break;
                }
            }
        }

        if (x1 >= WIDTH || x1 < 0 || y1 >= HEIGHT || y1 < 0) {
            gameClose = 1;
        }

        x1 += x1_change;
        y1 += y1_change;

        SDL_SetRenderDrawColor(renderer, 50, 153, 213, 255);
        SDL_RenderClear(renderer);
        SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);
        SDL_Rect food = {foodx, foody, SNAKE_BLOCK, SNAKE_BLOCK};
        SDL_RenderFillRect(renderer, &food);

        SnakeSegment head = {x1, y1};
        snake[length_of_snake] = head;

        for (int i = 0; i < length_of_snake; i++) {
            SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
            SDL_Rect segment = {snake[i].x, snake[i].y, SNAKE_BLOCK, SNAKE_BLOCK};
            SDL_RenderFillRect(renderer, &segment);
        }

        if (x1 == foodx && y1 == foody) {
            foodx = (rand() % (WIDTH / SNAKE_BLOCK)) * SNAKE_BLOCK;
            foody = (rand() % (HEIGHT / SNAKE_BLOCK)) * SNAKE_BLOCK;
            length_of_snake++;
        }

        SDL_RenderPresent(renderer);
        SDL_Delay(SNAKE_SPEED);
    }

    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}