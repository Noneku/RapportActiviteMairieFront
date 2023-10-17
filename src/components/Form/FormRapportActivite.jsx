import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";

export function FormRapportActivite() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Rapport D'activite
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4">
          <Textarea
            size="lg"
            label="Missions principales"
            placeholder="Saisissez vos missions principales ici..."
          />
          <Button size="sm" color="blue" className="mt-2">
            Joindre un fichier
          </Button>
        </div>
        <div className="mb-4">
          <Textarea
            size="lg"
            label="Indicateurs (quantitatifs/qualitatifs)"
            placeholder="Saisissez vos indicateurs ici..."
          />
          <Button size="sm" color="blue" className="mt-2">
            Joindre un fichier
          </Button>
        </div>
        <div className="mb-4">
          <Textarea
            size="lg"
            label="Réalisations / Projets 2023"
            placeholder="Saisissez vos réalisations ici..."
          />
          <Button size="sm" color="blue" className="mt-2">
            Joindre un fichier
          </Button>
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              J'accepte les
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Termes et Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Soumettre
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Vous avez déjà un compte ?{" "}
          <a href="#" className="font-medium text-gray-900">
            Connectez-vous
          </a>
        </Typography>
      </form>
    </Card>
  );
}
