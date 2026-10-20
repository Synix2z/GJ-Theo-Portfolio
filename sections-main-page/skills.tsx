import Image from "next/image";

import Title from "@/components/title";
import Separator from "@/components/separator";
import SkillsList from "@/components/skillsList";

export default function Skills() {
    return (
        <section>
            <Title text="Compétences" id="skills-title" />
            <SkillsList />
            <Separator />
        </section>
    );
}