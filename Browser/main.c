#include <stdio.h>
#include <windows.h>
#include <commctrl.h> // For common controls
#include <shellapi.h> // For ShellExecute

// Function prototypes
LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);
void CreateControls(HWND hwnd);
void PerformGoogleSearch(HWND hwnd);

// Control IDs
#define ID_BACK_BUTTON 1
#define ID_FORWARD_BUTTON 2
#define ID_RELOAD_BUTTON 3
#define ID_SEARCH_BAR 4

// Entry point of the application
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nShowCmd) {
    // Register the window class
    const char CLASS_NAME[] = "Sample Window Class";

    WNDCLASS wc = {0};
    wc.lpfnWndProc = WindowProc; // Window procedure
    wc.hInstance = hInstance;
    wc.lpszClassName = CLASS_NAME;

    RegisterClass(&wc);

    // Create the window
    HWND hwnd = CreateWindowEx(
        0,                              // Optional window styles
        CLASS_NAME,                    // Window class
        "Shrimp Browser",               // Window text
        WS_OVERLAPPEDWINDOW,           // Window style
        CW_USEDEFAULT, CW_USEDEFAULT, 800, 600, // Size and position
        NULL,                          // Parent window
        NULL,                          // Menu
        hInstance,                     // Instance handle
        NULL                           // Additional application data
    );

    if (hwnd == NULL) {
        return 0;
    }

    ShowWindow(hwnd, nShowCmd); // Show the window

    // Create controls
    CreateControls(hwnd);

    // Run the message loop
    MSG msg;
    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    return 0;
}

// Create controls (buttons and search bar)
void CreateControls(HWND hwnd) {
    // Create Back Button
    CreateWindow("BUTTON", "Back", 
        WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON, 
        10, 10, 75, 25, 
        hwnd, (HMENU)ID_BACK_BUTTON, NULL, NULL);

    // Create Forward Button
    CreateWindow("BUTTON", "Forward", 
        WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON, 
        90, 10, 75, 25, 
        hwnd, (HMENU)ID_FORWARD_BUTTON, NULL, NULL);

    // Create Reload Button
    CreateWindow("BUTTON", "Reload", 
        WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON, 
        170, 10, 75, 25, 
        hwnd, (HMENU)ID_RELOAD_BUTTON, NULL, NULL);

    // Create Search Bar (Edit Control)
    CreateWindow("EDIT", "", 
        WS_VISIBLE | WS_CHILD | WS_BORDER | ES_AUTOHSCROLL, 
        260, 10, 400, 25, 
        hwnd, (HMENU)ID_SEARCH_BAR, NULL, NULL);
}

// Perform Google Search
void PerformGoogleSearch(HWND hwnd) {
    char searchQuery[256];
    HWND searchBar = GetDlgItem(hwnd, ID_SEARCH_BAR);
    
    // Get the text from the search bar
    GetWindowText(searchBar, searchQuery, sizeof(searchQuery));

    // Create the Google search URL
    char url[512];
    snprintf(url, sizeof(url), "https://www.google.com/search?q=%s", searchQuery);

    // Open the default web browser with the search URL
    ShellExecute(NULL, "open", url, NULL, NULL, SW_SHOWNORMAL);
}

// Window procedure function
LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;
        case WM_COMMAND: {
            switch (LOWORD(wParam)) {
                case ID_BACK_BUTTON:
                    MessageBox(hwnd, "Back button clicked", "Info", MB_OK);
                    break;
                case ID_FORWARD_BUTTON:
                    MessageBox(hwnd, "Forward button clicked", "Info", MB_OK);
                    break;
                case ID_RELOAD_BUTTON:
                    MessageBox(hwnd, "Reload button clicked", "Info", MB_OK);
                    break;
            }
        }
        return 0;
        case WM_KEYDOWN: {
            if (wParam == VK_RETURN) { // Check if Enter key is pressed
                PerformGoogleSearch(hwnd); // Perform Google search
            }
        }
        return 0;
        case WM_PAINT: {
            PAINTSTRUCT ps;
            HDC hdc = BeginPaint(hwnd, &ps);
            // You can add drawing code here
            EndPaint(hwnd, &ps);
        }
        return 0;
    }
    return DefWindowProc(hwnd, uMsg, wParam, lParam);
}
// int main() {
//     // Initialize your web engine here
//     // Load the HTML file
//     system("start chrome 127.0.0.1:3000/index.html"); // This will open the HTML file in Chrome
//     return 0;
// }