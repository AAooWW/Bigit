import { useNavigate } from 'react-router-dom';
import { Button } from "@/app/components/ui/button";
import { useBotStore2 } from "@/app/ai/store/bot";
import { Undo2 } from "lucide-react";
import Locale from "@/app/locales";
import { Separator } from "@/app/components/ui/separator";
import Typography from "@/app/components/ui/typography";

export default function ChatHeader() {
  const navigate = useNavigate();
  const botStore = useBotStore2();
  const bot = botStore.currentBot();
  const session = botStore.currentSession();
  const numberOfMessages =
    (bot.botHello?.length ? 1 : 0) + session.messages.length;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
      <div className="absolute top-4 left-5">
        <Button
          size="mini"
          variant="outline"
          title={Locale.Chat.Actions.ChatList}
          onClick={handleGoBack}
        >
          <Undo2 />
        </Button>
      </div>
      <div className="text-center py-1">
        <Typography.H4>{bot.name}</Typography.H4>
        <div className="text-sm text-muted-foreground">
          {Locale.Chat.SubTitle(numberOfMessages)}
        </div>
      </div>
      <Separator />
    </div>
  );
}