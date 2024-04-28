The Ultimate React Course 2024: React, Redux & More

# 1. Sekcja 1: Welcome, Welcome, Welcome!

## 1.1. Wprowadzenie do kursu

### 1.2. Projekt rozpoczęty w codesandbox

Rozpoczęcie projektu po autoryzacji za pomocą konta GH, skrót do utworzenia nowego template w sandboxie pod domeną: react.new
Projekt polegający na utworzeniu prostej apki do pobierania porad z api, wyświetlania ich i zliczania kliknięć. Użyto useState oraz useEffect. Wydzielono komponent z Messages.
Mój kod: https://codesandbox.io/p/sandbox/busy-proskuriakova-mclsv8

### 1.3. Wprowadzenie o czym jest kurs, jak się uczyć i jak działa udemy

### 1.4. Link do repo prowadzącego

https://github.com/jonasschmedtmann/ultimate-react-course

### 1.5. Zapoznanie jak wygląda repo prowadzącego

## 2. Sekcja 2: PART 1: REACT FUNDAMENTALS [4 PROJECTS]

### 2.6. Wstęp

### 2.7. Wylistowanie 4 źródeł pomocnych podczas nauki kursu:

Dokumentacja React - https://react.dev/
Dokumnetacja CRA - Create React App - https://create-react-app.dev/
Dokumentacja buildera Vite - https://vitejs.dev/guide/
Czysty kod HTML z obsługą zagnieżdżenia skryptu z React - https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html

## 3. Sekcja 3: A First Look at React

### 3.8. Wstęp

### 3.9. W jakim celu powstały frameworki front-endowe

Omówienie zagadnień SERVER-SIDE RENDERING, CLIENT-SIDE RENDERING (SPA)
Vanilla JS jest imperatywny, trudniejszy do czytania i utrzymania niż deklaratywne frameworki.
Synchronizacja pomiędzy UI i danymi w Vanillii jest bardzo trudna, frameworki zdejmują odpowiedzialnosć z devów.
Frameworki pomagają w narzuceniu struktury kodu i sposobu pisania. Pozwalają devom zachować spójność kodu wewnątrz zespołu.

### 3.10. Prezdstawienie i analiza kodu napisanego w React i Vanilla JS

https://codesandbox.io/p/sandbox/react-first-app-advice-52879f

### 3.11. Czym jest React

React to biblioteka JS, deklaratywna, bazująca na komponentach i stanach.
React nie jest frameworkiem, tylko biblioteką przez to, że reprezentuje tylko warstwę widoku, potrzeba jeszcze innych bibliotek, żeby utworzyć framework (routing, fetching itd.). Frameworki React: Next.Js, Remix.
React renderuje componenty na aplikacji bazując na ich aktualnym stanie. Utrzymuje synchronizację UI dzięki stonom, gdy stan się zmeinia to komponent ponownie renderuje się.

### 3.12 Przygotowanie środowiska developerskiego

Zaleca VSC, NodeJS LTS,
Wtyczki:

- eslint,
- prettier,
- one monokai - zarządzanie kolorami
- material Icon Theme
  Włączenie autosave na onFocusChange co pozwoli na automatyczne zapisanie po zmianie zakładki w VSC, albo po przełączeniu okien. Osobiście widzę sporo problemów i wolę panować na tym kiedy mają pojawiać sie zapisy.
  Ustawienie domyślnego formatera na prettiera i dodanie mu wartości formatOnSave. Fajna opcja, ale nie ma racji bytu podczas pracy nad starszymi projektami lub z projektami które nie mają ustawień dla prettiera, ponieważ przy zapisie zmienia cały plik i później do commita lecą zmiany nie związane z realną zmianą w kodzie.
  Ustawienie Eslint na onSave

### 3.13 Czysty React

Prezentacja w jaki sposób można tworzyć kod w React, React przyjmuje kod w czystym JS. React i babel zaimportowany w pliku html z linków:

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

Renderowanie elementów HTML za pomocą funkcji createElement() zamiast składni JSX.
Hooki useState i useEffect przez wywołanie React.useEffect, React.useState zamiast przez wykorzystanie zainstalowanej aplikacji
