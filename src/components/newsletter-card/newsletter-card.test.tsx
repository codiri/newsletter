import { NewsletterCard } from "./index";
import { render } from "@testing-library/react";
import { UserProvider } from "@/contexts/user-context";
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from "@/mocks/user";
import { Newsletter } from "@/types/newsletter";

describe("<NewsletterCard />", () => {
  const registerTextRegex = /S'inscrire/i;

  it("should render the card successfully", () => {
    const newsletter: Newsletter = {
      id: "00000000000000000000000e",
      image: "https://picsum.photos/id/15/300/200",
      description: "Tales from the trail: the world is your oyster.",
      title: "Traveler's Tales",
      site: "LAN",
      subscriptions: [],
    };
    const { getByText, getByRole } = render(
      <UserProvider initUser={USER_WITHOUT_SUBSCRIPTION}>
        <NewsletterCard newsletter={newsletter} />
      </UserProvider>
    );

    const title = getByText(newsletter.title);
    const description = getByText(newsletter.description);
    const image = getByRole("img", { name: newsletter.title });
    const registerButton = getByRole("button", {
      name: registerTextRegex,
    });

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it("should enable user to access to the empty subscriptions newsletter", () => {
    const newsletter: Newsletter = {
      id: "00000000000000000000000e",
      image: "https://picsum.photos/id/15/300/200",
      description: "Tales from the trail: the world is your oyster.",
      title: "Traveler's Tales",
      site: "LAN",
      subscriptions: [],
    };
    const { getByRole } = render(
      <UserProvider initUser={USER_WITHOUT_SUBSCRIPTION}>
        <NewsletterCard newsletter={newsletter} />
      </UserProvider>
    );

    const registerButton = getByRole("button", {
      name: registerTextRegex,
    });

    expect(registerButton).toBeInTheDocument();
  });

  it("should enable user to access to its subscribed newsletter", () => {
    const newsletter: Newsletter = {
      id: "00000000000000000000000e",
      image: "https://picsum.photos/id/15/300/200",
      description: "Tales from the trail: the world is your oyster.",
      title: "Traveler's Tales",
      site: "LAN",
      subscriptions: ["RIGHT_1"],
    };
    const { getByRole } = render(
      <UserProvider initUser={USER_WITH_ONE_SUBSCRIPTION}>
        <NewsletterCard newsletter={newsletter} />
      </UserProvider>
    );

    const registerButton = getByRole("button", {
      name: registerTextRegex,
    });

    expect(registerButton).toBeInTheDocument();
  });

  it("Should not allow the user to access a newsletter they have not subscribed to", () => {
    const newsletter: Newsletter = {
      id: "0000000000000000000000e",
      image: "https://picsum.photos/id/15/300/200",
      description: "Tales from the trail: the world is your oyster.",
      title: "Traveler's Tales",
      site: "LAN",
      subscriptions: ["RIGHT_2"],
    };
    const { getByRole } = render(
      <UserProvider initUser={USER_WITH_ONE_SUBSCRIPTION}>
        <NewsletterCard newsletter={newsletter} />
      </UserProvider>
    );

    const subscribeButton = getByRole("button", {
      name: /S'abonner/i,
    });

    expect(subscribeButton).toBeInTheDocument();
  });
});
