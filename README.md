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

## 3.14 Prezentacja dokumentacji React

## 3.15 Rozpoczęcie nowego projektu

Przedstawiono dwa buildery używane przy projektach React: CRA i Vite.
CRA jest starterem zawierającym Eslint, Prettier, Jest, webpack itd. Nie zaleca się korzystania z niego na realnych aplikacjach, jedynie do celów edukacyjnych.
Vite jest przedstyawiony jako bardzo szybki builder do budowania "realnych aplikacji". Problemem jest konieczność instalowania dodatkowych paczek jak ESLint, przy którym łatwo o błędy.

## 3.16 Rozpoczęcie projektu przy użyciu CRA

Wstęp do budowy terminala i podstawowych komend:

- ls,
- dir,
- cd

Instalacja projektu za pomocą komendy:

> npx create-react-app@5 pizza-menu

Zapoznanie ze strukturą utworzonego projektu i ruchomienie projektu za pomocą komendy

> npm start

Naniesienie swoich, drobnych zmian

## 4. Sekcja 4: (Optional) Review of Essential JavaScript for React

### 4.17. Wstęp do sekcji

### 4.18. Destrukturyzacja obiektów i tablic

Zainstalowanie dodayku Quokka.js do wywyołania JS w środowisku VSC.
Zaprezentowane sposoby destrukturyzacji obiektów:
Poprzez stworzenie zmiennej obiektu zawierającego elementy do których chcemy sie dostać z obiektu:

> const { title, author, genres } = book;

\*Sposoby destrukturyzacji obiektów niewymienione w kursie:

- Destrukturyzacja w funkcjach
  > function showUser({name, surname}) {
  > console.log(name);
  > console.log(surname);
  > }
  > const user = {
  > name: "Marcin",
  > surname: "Nowak"
  > };
  > showUser(user);

Zaprezentowane sposoby destrukturyzacji tablic:
Poprzez stworzenie zmiennej tablicy zawierającej elementy do których chcemy sie dostać z tablicy (nazwy zostają przypisane do kolejnych elementów):

> const [primaryGenre, secondaryGenre] = genres;

\*Sposoby destrukturyzacji tablic niewymienione w kursie:

- Pominięcie elementów
  > const [name1, name2,, name4] = tab;
- Ustawienie domyślnych wartości
  > const [name1 = "brak", name2 = "brak", name3 = "brak"] = tab;
- Zamiana miejscami wartości
  > [a, b] = [b, a];

### 4.19. Rest/Spread Operator

Rozbicie tablicy na pojedyncze wartości oraz resztę starej tablicy. Wartość reszta starej tablicy musi być wydzielona na końcu:

> const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

Dodanie do tablicy pojedyncze wartości za pomocą operatora spread:

> const newGenres = [...otherGenres, "epic games"];

Dodanie do obiektu pojedyncze wartości za pomocą operatora spread:

> const updatedBook = { ...book, moviePublicationDate: 2000 }

Edycja pojedynczej wartości (price) za pomocą operatora spread:

> const updatedBook = { ...book, moviePublicationDate: 2000, pages: 2000 }

### 4.20. Template Literals

String zapisywany za pomocą ``, w którym można odwołac się do zmiennej przy pomocy ${zmienna}:

> const { moviePublicationDate } = updatedBook;
> const summary = `Data publikacji: ${updatedBook.moviePublicationDate}`;

### 4.21 Użycie operatorów warunkowych zamiast if/else

warunek ? true : false

deklaracja zmiennej:

> const stop = x > y ? "Stop" : "Move"

### 4.22 Funkcje strzałkowe

(parametr) => {blok kodu}

Prowadzący zaleca używanie funkcji strzałkowych jako jednolinijkowe:
(parametr) => kod

wyrażenie funkcyjne:
const funkcja = (parametr) => kod

deklaracja funkcji:
(parametr) => kod

Wyrażenia można wywoływać wewnątrz template stringów

### 4.23 Skrócone wyrażenia logiczne: &&, ||, ??

&& jeśli pierwsza wartość jest true, to równanie zwraca drugą wartość. Jeśli pierwsza wartość jest falsy to zwraca pierwszą wartość

|| jeśli pierwsza wartość jest true, to równanie zwraca pierwszą wartość. Jeśli pierwsza wartość jest falsy to zwraca drugą wartość.
Jest tu problem, jeśli chcemy pozyskać info o tym, że czegoś jest 0, co nie jest tożsame z odpowiednikiem "undefined" to otrzymamy zwrotkę jakby wartość była false, a nie 0.

?? jeśli pierwsza wartość jest true, to równanie zwraca drugą wartość. Jeśli pierwsza wartość jest falsy to zwraca pierwszą wartość.
Tu problem z wartościami "nullish" został poprawiony

### 4.24 Operator Optional Chaining

?. Dodawany po wartości która może zwracać undefined lub null
Przydatne gdy nie mamy pewności co do sktuktury danych które otrzymamy

### 4.25 Metoda .map()

Metoda zwraca nową tablicę z tą samą długością, ale z wykonanymi operacjami na każdym z elementów.

> const essentialsData = books.map((book) => ({
> title: book.title,
> author: book.author,
> reviewsCount: getTotalReviewCount(book),
> }));

### 4.26 Metoda .filter()

Metoda zwraca nową tablicę z wartościami spełniającymi warunek.
Da sie zastosować dwa filtry:

> const longBooksWithMovie = books
> .filter((book) => book.pages > 500)
> .filter((book) => book.hasMovieAdaptation);

Ale lepiej użyć jednego z wyrazeniem logicznym:

> const longBooksWithMovie = books
> .filter((book) => book.pages > 500 && book.hasMovieAdaptation)

Metody filter można używać z innymi metodami np.

> const adventureBooks = books.filter((books) =>
> books.genres.includes("adventure")
> ).map(book=>book.title)

### 4.27 Metoda .reduce()

W kursie przedstawiono metodę .reduce() jako przykład funkcji akumulującej wyniki

> const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

sum - początkowo wynosi 0, następnie akumuluje wyniki dodawania book.pages, w rezultacie dostajemy sumę stron wszystkich książek

Zamiast ", 0" można podstawić obiekt lub tablicę, co w połączeniu z operatorem spread pozwala na filtrowanie, mapowanie, zliczanie elementów itd.

### 4.28 Metoda .sort()

Metoda mutująca tablicę na której działa, służy sortowaniu

> const sorted = arr.sort((a, b) => a - b);

Aby zapobiec zmianom oryginalnej tablicy, sortowanie przeprowadza sie na kopii wykonanej za pomocą metody .slice();

> const sorted = arr.slice().sort((a, b) => b - a);

> const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

### 4.29 Niemutujące tablice

Wykorzystanie operatora spread (dodanie) i metod filter() (usuwanie) oraz map() (aktualizacja) nie mutuje tablic, tylko zwraca nową

### 4.30 JS asynchroniczny - Promises

Promis składa sie z fetcha() i następujących po nim metod .then() zawierających instrukcje

> fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>console.log(data));

Asynchroniczność polega na tym, że kod może wykonać jakąś operację, bez oczekiwania na zakończenie poprzedniej operacji.

### 4.31 JS asynchroniczny - Async/await

Blok async/await pozwala na czytelniejsze i prostsze przypisanie danych pobranych asynchronicznie ze źródła

> async function getTodos() {
> const res = await fetch("https://jsonplaceholder.typicode.com/todos");
> const data = await res.json();
> console.log(data);
>
> return data;
> }
> const todos = getTodos();
>
> console.log(todos); //Promise

## 5. Sekcja 5: Working With Components, Props, and JSX

### 5.32 Wprowadzenie do sekcji

### 5.33 Renderowanie komponentu Root i strict mode w JS

Strict Mode jest częścią React.
Komponenty renderuje się poprzez odwołanie do elementu html któy jest rootem i wywołanie metody render():

> const root = ReactDOM.createRoot(document.getElementById('root'));
> root.render(
> <React.StrictMode>
> <App />
> </React.StrictMode>
> );

### 5.34. Debugging

Główne przyczyny nie działania aplikacji:

- Brak uruchomionej aplikacji (npm start)
- Potrzeba przeładowania przeglądarki

Błędy mogą pojawiaś się w zakładkach VSCode: termional i problemy, dane wyjściowe oraz w konsoli przeglądarki.

Kolejne przykłady błędów:

- Wiele zwracanych elementów JSX nie owrapowanych rodzicem
- Zmienna do któej nic się nie odwołuje (eslint)

### 5.35 Komponenty jako bloki kodu

Komponent to podstawowe założenie react. W React służą do budowania bloków UI. UI składa się z warstw danych, logiki i wyglądu.
Cały UI składa się z wielu połączonych komponentów.

### 5.36 Tworzenie i reużywalność komponentów

Komponenty w React tworzymy jako funkcje, nazwa funkcji jest zapisywana z wielkiej litery, PascalCase.
Komponentów można używać wielokrotnie.

### 5.37 Czym jest JSX

Pozwala pisać kod deklaratywnie, opisuje jak komponent ma działać i wyglądać. Komponenty uruchamiają blok kodu JSX. JSX jest rozszerzeniem JS pozwalającym na osadzenie JS, CSS i komponentów React w składni HTML
JSX jest konwertowany do funkcji React.createElement()

Kod imperatwny: krok po kroku opisujemy jak utworzyć komponent: querySelectory, addEventListener, classList.add() itd.
Kod deklaratywny: JSX

> <p>{question.text}</p>
> <UpvotBtn
> onClick={upvote}
> upvotes={upvotes}
> />

### 5.38 Tworzenie dodatkowych komponentów

Utworzenie komponentów Header, Menu, Footer i osadzenie w Menu komponentu Pizza

### 5.39 JS w komponentach

Użycie zmiennych i funkcji do poierania informacji o godzinie wewnątrz komponentu

> const hour = new Date().getHours();
> const hours = {
> open: 12,
> close: 18
> }
> const isOpen = hour >= hours.open & hour <= hours.close;

### 5.40 Separation of Concerns (Modulartność kodu)

W react zastosowano nowe podejście w podziale kodu na logikę i UI. Dotychczasowo za html, css i js odpowiadały osobne pliki, teraz wszystkie informacje są przechowywane w obrębie jednego komponentu, zachowując przy tym podział obowiązków konkretnych bloków kodu.

### 5.41 Stylowanie w aplikacji React

Liniowo za pomocą obiektu

> <h1 style={{ display: "flex", fontSize: "32px" }}> Tekst </h1>;

Przekazanie obiektu ze zmiennej:

> const styles = { display: "flex", fontSize: "32px" }
>
> <h1 style={styles}> Tekst </h1>;

Za pomocą klasy ostylowanej w osobnym pliku .css:

> <div> className="container"</div>

Nie można użyć słowa class, ponieważ jest zarezerwowane w JS (skłądnie to JSX, a nie HTML) dla deklaracji klas

### 5.42 Obsługa propsów

Props to przekazanie wartości poprzez atrybuty do elementu potomnego.

> <Pizza
>   imgSrc={pizza.photoName}
>   name={pizza.name}
>   ingredients={pizza.ingredients}
>   key={i}
> />

Wywołanie właściwości propsa poprzez destrukturyzację obiektu props w elemencie dziecka:

> Pizza(props) {
> const { imgSrc, name, ingredients } = props;
> }

### 5.43 Props, Immutability, and One-Way Data Flow

- Propsy służą do przekazywania danych z komponentu rodzica do komponentu dziecka (w dół drzewa komponentów)
- Niezbędne narzędzie do obsługi komponentów, podobne do parametrów funkcji
- Dzięki propsom komponent rodzica kontroluje jak komponent dziecka wygląda i działa
- Cokolwiek może być ptrzekazane jako props:
  - pojedyncza wartość,
  - tablice,
  - obiekty,
  - funkcje,
  - inne komponenty

Propsy są niemutowalne, a przepływ danych jest w dół drzewa komponentu. Jeśli jest potrzeba zmian propsa, to odbywa się przez stan. Zmiany w propsach prowadzą do zmian w komponencie rodzica, a to tworzy efekty uboczne, co nie jest czystym rozwiązaniem. Komponenty mają być czystymi funkcjami, to pozwalia optymalizować aplikacje, unikać błędów i czynią apkę przewidywalną.

Jednokierunkowy przepływ danych czyni aplikacje łatwiejszymi do zrozumienia oraz do kontroli. Prościej je naprawiać i mamy większą kontrolę nad nią oraz zwiększa wydajność.
Dwukierunkowy przepływ danych jest wykorzystywany np. w angularze.

### 5.44 Zadanie #1 Karta profilu

Kod w repo

### 5.45 Zasady JSX

Specyfika:

- JSX działą i wygląda jak HTML, lecz obsługuje tryb "JavaScript", dzięki zastosowaniu {}
- Można zamieszczać wywołania JS wewnątrz {}. Np.: odwołąnia do zmiennych, tworzenie tablic lub obiektów, funkcje tablicowe np. [].map(), operator warunkowy itd.
- If/else, pętle, switche nie są dopuszczone
- JSX działa dzięki wywołaniu JavaScript
  - Można zamieścić JSX wewnątrz JSX za pomocą {}
  - JSX można pisać wszędzie wewnątrz komponentu (if/else, przypisanie do zmiennycg, dodanie do funkcji)
- JSX ma jeden element root

Różnice w porównaniu do HTMLa:

- className zamiast class
- htmlFro zamiast for
- każdy tag musi być zamknięty np. <img />, <br />
- obsługa zdarzeń, atrybuty i inne właściwości są pisane camelCasem: onClick, OnMouseOver
  - wyjątkiem są aria-_ i data-_, one są pisane jak HTML
- liniowe style CSS są wprowadzane jako obiekt: {{<style>}}
- właściwości CSS są wywoływane jako camelCase
- komentarze muszą być wewnątrz {} jak w JS

### 5.46 Wywołanie listy

Za pomocą funkcji .map() wywołanej na tablicy. Chodzi o to, żeby było można podstawić tyle komponentów dziecka ile mamy danych do podziału przekazanuych do rodzica.

> <main className="menu">
>   <h2>Our Menu</h2>
>   {
>     pizzaData.map((pizza, i) => {
>       return (
>         <Pizza
>           imgSrc={pizza.photoName}
>           name={pizza.name}
>           ingredients={pizza.ingredients}
>           key={i}
>           price={pizza.price}
>         />
>       );
>     })
>   }
> </main>

### 5.47 Warunkowe renderowanie z &&

Jeśli sprawdza czy jakaś wartość istnieje, to jeśli jej nie ma zwróci 0, a jeśli sprawdzi jakieś porównanie to zwróci false. Jeśli się da, to lepiej użyć operatora warunkowego.

> const pizzas = pizzaData;
> const pizzasNums = pizzaData.length;
> return
>
>   <main className="menu">
>     <h2>Our Menu</h2>
>     pizzasNums > 0 && 
>       <ul className="pizzas">
>         {pizzas.map(pizza, i) => 
>           return 
>             <Pizza
>               imgSrc={pizza.photoName}
>               name={pizza.name}
>               ingredients={pizza.ingredients}
>               key={i}
>               price={pizza.price}
>             />
>           ;
>         }
>       </ul>     
>   </main>
> ;

### 5.48 Warunkowe renderowanie z operatorami

> {pizzasNums > 0 ? (
>
>   <ul className="pizzas">
>     {pizzas.map((pizza, i) => {
>       return (
>         <Pizza
>           imgSrc={pizza.photoName}
>           name={pizza.name}
>           ingredients={pizza.ingredients}
>           key={i}
>           price={pizza.price}
>         />
>       );
>     })}
>   </ul>
> ) : (
>   <p>Pracujemy nad menu, odwiedź nas później</p>
> )}

### 5.49 Warunkowe renderowanie z wieloma deklaracjami return

Przydatne np. gdy jakieś dane nie wymagają wyświetlenia w komponencie

> function Pizza(props) {
> const { photoName, name, ingredients, price, soldOut } = props;
> if (soldOut) return null;
> return (
>
> <div className="pizza">
> <img src={photoName} alt={name} />
> <div>
> <h3>{name}</h3>
> <p>{ingredients}</p>
> <span>{price}</span>
> </div>
> </div>
> );
> }

### 5.50 Wyodrębnianie JSX w nowym komponencie

Utworzenie komponentu Order w stopce

### 5.51 Destrukturyzacja propsów

Podstawowym sposobem jest destrukturyzacja bezpośrednio w deklaracji komponentu:

> function Pizza({ photoName, name, ingredients, price, soldOut }) {
> }

Kolejnym sposobem jest zadeklarowanie jako zmienne:

> function Pizza(props) {
> const { photoName, name, ingredients, price, soldOut } = props;
> }

### 5.52 React Fragments

Pozwala grupować elementy bez dodawania dodatkowych elementów w drzewie HTML

> <></>

Użycie React Fragment gdy potrzebujemy przekazać atrybut key:

> <React.Fragment key={i}></React.Fragment>

### 5.53 Warunkowe dodawanie klas i tekstu

Dodanie klasy:

> <div className={`pizza ${soldOut && "sold-out"}`}></div>

Wpływanie na tekst:

> <span>{soldOut ? "Sold out" : price}</span>

### 5.54 Sekcja podsumowująca

Każdy komponent jest samodzielnym elementem UI. Zawiera własne: dane, logikę JS oraz własny wygląd.
Komponenty są napisane za pomocą deklaratywnej składni JSX. Każdy fragment JSX może zawierać znaczniki, zasadniczo w formie HTML.
Do komponentów potomnych przekazuje się konfiguracje za pomocą propsów.
Za pomocą metod tablicowych .map(), renderujemy wiele komponentów.
Renderowanie warunkowe służy do wprowadzania zależności w konfigurowanych komponentach.

### 5.55 Zadanie #2 Karta profilu v2

Kod w repo pod katalogiem 5.44

## Sekcja 6: State, Events, and Forms: Interactive Components

### 6.56 Przegląd sekcji

Sekcja o tym jak stworzyć interaktywne komponenty

### 6.57 Tworzenie komponentu z krokami

Sekcja inicjująca projekt

### 6.58 Obsługa zdarzeń w React

Obsługujemy deklaratywnie, eventy obsługujemy liniowo np. onClick={}, zamiast addEventListener.

### 6.59 Czym jest stan w React

Stan to dane które może przechowywać podczas cyklu życia aplikacji. To coś na kształt pamięci komponentu.
Zmianna stanu to zmienna w komponencie. Aktualizacja stanu powoduje re-renderowanie komponentu.
Stan pozwala programistom na utrzymanie wartości zmiennych pomiędzy renderowaniami.

### 6.60 Tworzenie zmiennej stanu przy pomocy hooka useState

Poprzez destrukturyzację tablicy zawierającej się w useState()

> const [step, setStep] = useState(1)

### 6.61 Nie obsługuj stanu ręcznie!

Nie można edytować stanu za pomocą let

> let [zmienna, setZmienna] = useState(1)
> zmienna = zmienna ++ // nie zadziała!

**Nie wolno** mutować zmiennych:

> const [test] = useState({name: "John"})
> test.name = "Paul"

### 6.62 Mechanika stanu

Każda zmiana stanu wywołuje ponowne wyrenderowanie komponentu z podstawionymi już danymi.

React nosi swoją nazwę ponieważ reaguje na zmiany stanu poprzez re-render UI.

### 6.63 Dodanie kolejnego stanu

Dodano useState z isOpen, żeby przełączać widoczność dzięki operatorowi warunkowemu &&

### 6.64 React developer tools

Zapoznanie z zakładką Components w React dev tools

### 6.65 Aktualizacja stanu na podstawie aktualnego stanu

Najlepiej aktualizować stan na podstawie aktualnego stany z wykorzystaniem callbacka

> function handleAddStep() {
> step > 1 && setStep((s)=>s - 1)
> }

### 6.66 Praktyczne wskazówki dotyczące stanów

Każdy komponent ma własny stan. UI to reprezentacja danych zmieniających się w czasie, a nie jawna manipulacja DOMem.
Opisujemy UI danymi zmieniającymi stan, obsługą zdarzeń i JSxem.

**Wskazówki**

- Używaj stanu dla zmiennych które muszą pozostać zapamiętane (w JS to let, [] lub {}).
- Jeżeli coś w komponencie ma być dynamiczne, trzeba utworzyć stan powiązany z tym elementem i trzeba aktualizować stan gdy ten element powinien się zmienić.
- Jeśli chce zmienić wygląd komponentu lub wyświetlane dane to powinienem aktualizować stan. To dzieje sie za pomocą obsługi zdarzeń.
- Komponent jest odbiciem stanu zmieniającego sie nieustannie
- Dla danych nie potrzebujących re-renderowania, nie używaj useState, użyj zwykłej zmiennej.

### 6.67 Użycie Vanilla JS

Przykład wykonanej aplikacji w Vanilla JS oraz zaprezentowanie, że komponenty są osobnymi bytami.

### 6.68 Wyzwanie 1: Licznik daty

Licznik wskazuje datę +/- od dnia zero. W dodatku ma być opcja "step" dzięki której ustalamy jak duży ma być przeskok czasu.

W repo 6.68.

### 6.69 Rozpoczęcie nowego projektu "Far Away" Lista do podróży

W repo 6.69

### 6.70 Tworzenie Layoutu

Utworzenie komponentów:

> <Logo />
> <Form />
> <PackingList />
> <Stats />

### 6.71 Renderowanie list elementów

Renderowanie za pomocą metody JS .map()

### 6.72 Tworzenie formularza i obsługa podzadań

Utworzenie opition za pomocą Array.from()

> {Array.from({ length: 20 }, (\_, i) => i + 1).map((num) => (
>
>   <option value={num} key={num}>
>     {num}
>   </option>
> ))}

### 6.73 Kontrolowanie elementów

Manipulacja inputem oraz selectem za pomocą stanu i metod onChange

### 6.74 State vs. Props

**Stan**

- Dane wewnątgrzne
- Pamięć komponentu, może być aktualizowany przez komponent
- Aktualizacja stanu powodoje ponowne renderowanie komponentu
- Czyni komponent interaktywnym

**Props**

- Zewnętrzne dane, przetrezymywane przez komponent rodzica
- Podobny do argumentu funkcji
- Tylko do odczytu
- Otrzymanie nowych propsów powoduje ponowne wyrenderowanie komponentu. Często gdy rodzić jest aktualizowany.
- Używane przez rodzica do konfugurowania komponentu dziecka

### 6.75 Zadanie #1: Flashcards

Zrobienie aplikacji do wyświetlania pytania i odpowiedzi. Odpowiedź ma się pojawić po kliknięciu, gdy użytkownik kliknie na inną kartę stara zostaje ponownie zasłonięta. Do użycia powinien być wykorzystany jeden stan.

Repo 6.75

### 6.76 Wyzwanie 2: Licznik daty v2

Repo 6.76
