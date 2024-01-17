## Getting started:

To open this app on your local, after you cloned the repository, run this command:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Tech stack:

<div >
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/190887639-d0ba4ec9-ddbe-45dd-bea1-4db83846503e.png" alt="Chakra UI" title="Chakra UI"/></code>
</div>

## App features:
- homepage provides users with a list of trips and some short information like: rating, emission, number of days and countries
- user is able to click on a trip card and go to its details
- details page gives more insight into a selected trip

## Technical details:
- app was built with Chakra UI components
- to fetch list of trips and add infinite scrolling, React Query was used
- when hovering over "Learn more" button of a specific trip, its trip details are fetched in the background by its id
- server response was mocked  with NextJs pages/api
- there are two endpoints: for list of all trips and for a specific trip id
