import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeader } from '@/components/common/section-header'
import { Reveal } from '@/components/common/reveal'
import { PROFILE } from '@/data'

export function Contact() {
	return (
		<section
			className='mx-auto max-w-6xl px-4 py-14 sm:py-16'
			id='contact'
		>
			<SectionHeader
				eyebrow="Let's talk"
				title='Contact'
				desc='Keep this simple: one clear CTA, optional form, and direct links.'
			/>

			<div className='grid gap-4 md:grid-cols-[1fr_0.9fr]'>
				<Reveal>
					<Card className='rounded-3xl border-zinc-200 bg-white p-6 sm:p-8 shadow-sm gap-0'>
						<CardContent className="p-0">
							<div className='text-base font-semibold text-zinc-900'>
								Want me on your team?
							</div>
							<p className='mt-2 text-sm text-zinc-600 max-w-xl'>
								I'm applying for Data Analyst and Developer roles. I can share
								case studies, dashboards, repos, and references.
							</p>

							<div className='mt-5 flex flex-wrap gap-3'>
								<Button
									size="lg"
									className='rounded-xl bg-zinc-900 hover:bg-zinc-800'
									asChild
								>
									<a
										href={
											PROFILE.socials.find((s) => s.label === 'Email')
												?.href ?? 'mailto:you@example.com'
										}
									>
										Email me
									</a>
								</Button>
								<Button
									variant="outline"
									size="lg"
									className='rounded-xl border-zinc-200 bg-white hover:bg-zinc-50'
									asChild
								>
									<a
										href={
											PROFILE.socials.find((s) => s.label === 'LinkedIn')
												?.href ?? '#'
										}
									>
										LinkedIn
									</a>
								</Button>
								<Button
									variant="outline"
									size="lg"
									className='rounded-xl border-zinc-200 bg-white hover:bg-zinc-50'
									asChild
								>
									<a
										href={
											PROFILE.socials.find((s) => s.label === 'GitHub')
												?.href ?? '#'
										}
									>
										GitHub
									</a>
								</Button>
							</div>

							<div className='mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4'>
								<div className='text-xs text-zinc-500'>Quick pitch</div>
								<div className='mt-1 text-sm font-medium text-zinc-900'>
									"I build and measure. I ship features and validate impact
									with data."
								</div>
							</div>
						</CardContent>
					</Card>
				</Reveal>

				<Reveal delay={0.05}>
					<Card className='rounded-3xl border-zinc-200 bg-white p-6 sm:p-8 shadow-sm gap-0'>
						<CardContent className="p-0">
							<div className='text-base font-semibold text-zinc-900'>
								Send a note
							</div>
							<p className='mt-2 text-sm text-zinc-600'>
								(Optional) Replace with a real form handler.
							</p>

							<form className='mt-5 grid gap-3'>
								<Input
									className='h-11 rounded-xl border-zinc-200 bg-white focus:ring-2 focus:ring-zinc-300'
									placeholder='Your name'
								/>
								<Input
									className='h-11 rounded-xl border-zinc-200 bg-white focus:ring-2 focus:ring-zinc-300'
									placeholder='Email'
									type='email'
								/>
								<Textarea
									className='min-h-[120px] rounded-xl border-zinc-200 bg-white focus:ring-2 focus:ring-zinc-300'
									placeholder='Message'
								/>
								<Button
									type='button'
									size="lg"
									className='h-11 rounded-xl bg-zinc-900 hover:bg-zinc-800'
								>
									Send (demo)
								</Button>
							</form>
						</CardContent>
					</Card>
				</Reveal>
			</div>

			<footer className='mt-10 text-center text-xs text-zinc-500'>
				© {new Date().getFullYear()} {PROFILE.name}. Built with Next.js +
				Tailwind + Framer Motion.
			</footer>
		</section>
	)
}

